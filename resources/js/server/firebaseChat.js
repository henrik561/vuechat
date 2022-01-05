import db from './database';
import "firebase/compat/firestore";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const usersRef = db.database().ref('users');
const messagesRef = db.database().ref('messages');
const chatsRef = db.database().ref('chats');
const activeChatsRef = db.database().ref('activeChats');
const usersVRef = db.database().ref('onlineStatus');

//Chat functions
export async function sendMessage(chatter_id, chatKey, message, message_seen) {
    messagesRef.push({
        chatter_id,
        chatKey,
        message,
        message_seen,
        timestamp: `${(new Date()).toTimeString().substr(0,5)}`
    });
}

export async function hasChat(chatKey) {
    let snapshotExists = false;
    await chatsRef.orderByChild('chatKey').equalTo(chatKey).once('value', async snapshot => {
        if(snapshot.exists()) {
            snapshotExists = true;
        }
    })
    return snapshotExists;
}

export async function hasExistingConnection(chatKey, receiver_id, chatter_id) {
    let response = false;
    await activeChatsRef.orderByChild('chatKey').equalTo(chatKey).once('value', snapshot => {
        _.forEach(snapshot.val(), chat => {
            if(chat.chatter_id === chatter_id && chat.receiver_id === receiver_id) {
                response = true;
            }
        })
    })
    return response;
}

export async function addNewChat(chatter_id, receiver_id) {
    let newChat = chatsRef.push({
        chatter_id,
        receiver_id,
        deleted: false,
        blocked: false,
    })

    await chatsRef.child(newChat.key).update({ 'chatKey' : newChat.key })
}

export async function createNewChat(chatter_id, receiver_id, chatKey) {
    await stopActiveChat(chatter_id, receiver_id, chatKey)
    await activeChatsRef.push({
        chatter_id,
        receiver_id,
        chatKey,
    })
}

export async function markMessagesAsRead(chatter_id, receiver_id) {
    let messagesNotRead = [];
    await messagesRef.orderByChild('receiver_id').equalTo(receiver_id).once('value', async (snapshot) => {
        messagesNotRead = _.filter(snapshot.val(), async function(value, key) {
            if(value.chatter_id === chatter_id && !value.message_seen) {
                return [{
                    "seen_at" : `${(new Date()).toTimeString().substr(0,5)}`,
                    "message_seen" : true,
                }, key]
            }
        })
    })
    _.forEach(messagesNotRead, async message => {
        await db.database().ref(`messages/${message[1]}`).update(message[0]);
    })
}

export async function stopActiveChat(chatter_id, receiver_id, chatKey) {
    await activeChatsRef.orderByChild('chatter_id').equalTo(chatter_id).once('value', snapshot => {
        _.filter(snapshot.val(), (chat, key) => {
            if(chat.receiver_id === receiver_id && chat.chatKey === chatKey) {
                activeChatsRef.child(key).set(null)
            }
        })
    })
}

export async function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            addUserToRLDb(userCredential.user);
            return userCredential;
        })
        .catch((error) => {
            return error
        });
}

export async function logUserIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            await updateUserOnlineVisibility(userCredential, 'online')
            return userCredential
        })
        .catch((error) => {
            return error
        });
}

export async function getUserOnlineStatusKey(user) {
    let userKey = null;
    await usersVRef.orderByChild("uid").equalTo(user.uid).once('value', async (snapshot) => {
        _.filter(snapshot.val(), async function(value, key) {
            userKey = key
        })
    })
    return userKey;
}

export function addUserToRLDb(user) {
    usersRef.push({
        "username" : user.displayName,
        "email" : user.email,
        "phoneNumber" : user.phoneNumber,
        "profilePicture" : user.photoURL,
        "uid" : user.uid,
    });
}

export async function logUserInGoogle() {
    return signInWithPopup(auth, provider)
        .then(async (result) => {
            await userExists(result.user.uid, result.user);
            return result;
        }).catch((error) => {
            console.log(error);
            return error;
        });
}

export async function userExists(uid, user) {
    return await usersRef.orderByChild("uid").equalTo(uid).once('value', async (snapshot) => {
        if(!snapshot.exists() && user !== null) {
            await addUserToRLDb(user);
        }
        await updateUserOnlineVisibility(user, 'online')
    })
}

export async function userHasOnlineStatus(user) {
    await usersVRef.orderByChild('uid').equalTo(user.uid).once('value', async (snapshot) => {
        if(!snapshot.exists()) {
            let userData = {
                "uid": user.uid,
                "online_visibility" : new Date().getTime()
            }

            await usersVRef.push(userData)
        }
    })
}

export async function getUserOnlineStatus(user) {
    let snapshotVal = {}
    await userHasOnlineStatus(user)
    await usersVRef.orderByChild('uid').equalTo(user.uid).once('value', async (snapshot) => {
        snapshotVal = snapshot.val()
    })
    return snapshotVal[Object.keys(snapshotVal)[0]].online_visibility
}

export async function getUserData(user_uid) {
    let userData = {};
    await usersRef.orderByChild('uid').equalTo(user_uid).once('value', snapshot => {
        userData = snapshot.val()
    })
    return await userData[Object.keys(userData)[0]]
}

export async function updateUserOnlineVisibility(user, appearance) {
    await userHasOnlineStatus(user);
    await usersVRef.orderByChild("uid").equalTo(user.uid).once("value", (snapshot) => {
        _.filter(snapshot.val(), async function (userValue, key) {
            await db.database().ref(`onlineStatus/${key}`).set({
                "uid": userValue.uid,
                "online_visibility": appearance
            });
        })
    })
}

export function useAuth() {
    return auth;
}
//user Logout





