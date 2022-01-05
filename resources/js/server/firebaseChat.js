import db from './database';
import "firebase/compat/firestore";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const usersRef = db.database().ref('users');
const messagesRef = db.database().ref('messages');
const chatsRef = db.database().ref('chats');
const usersVRef = db.database().ref('onlineStatus');

//Chat functions
export async function sendMessage(sender_id, receiver_id,channel_id, message, message_seen) {
    messagesRef.push({
        sender_id,
        receiver_id,
        message,
        channel_id,
        message_seen,
        timestamp: `${(new Date()).toTimeString().substr(0,5)}`
    });
}

export async function hasChat(chatter_id, receiver_id) {
    let includes;
    await chatsRef.once("value", snapshot => {
        includes = _.filter(snapshot.val(), val => {
            return val.chatter_id === chatter_id && val.receiver_id === receiver_id
        })
    })

    return !_.isEmpty(includes);
}

export async function startNewChat(chatter_id, receiver_id) {
    await endChat(chatter_id);
    chatsRef.push({
        chatter_id,
        receiver_id,
    })
}

export async function markMessagesAsRead(chatter_id, receiver_id) {
    let messagesNotRead = [];
    await messagesRef.once('value', snapshot => {
        _.filter(snapshot.val(), async function(chat, key) {
            if(((chat.sender_id === chatter_id && chat.receiver_id === receiver_id) || (chat.sender_id === receiver_id && chat.receiver_id === chatter_id)) && !chat.message_seen) {
                messagesNotRead.push([
                    {
                        "sender_id": chat.sender_id,
                        "receiver_id" : chat.receiver_id,
                        "channel_id" : chat.channel_id,
                        "message" : chat.message,
                        "timestamp" : chat.timestamp,
                        "seen_at" : `${(new Date()).toTimeString().substr(0,5)}`,
                        "message_seen" : true,
                    },
                    key
                ]);
            }
        });
    })
    _.forEach(messagesNotRead, async message => {
        await db.database().ref(`messages/${message[1]}`).set(message[0]);
    })
}

export async function endChat(chatter_id) {
    let refKey = '';
    await chatsRef.once('value', snapshot => {
        _.filter(snapshot.val(), async function(chat, key) {
            if(chat.chatter_id === chatter_id) {
                refKey = key;
            }
        });
    })

    if(refKey === '') {
        return
    }
    await db.database().ref(`chats/${refKey}`).set(null);
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

export async function getUserKey(uid) {
    return await usersRef.orderByChild("uid").equalTo(uid).once('value', async (snapshot) => {
        if(!snapshot.exists()) {
            return snapshot.val()
        }
        return null;
    })
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
            await updateUserOnlineVisibility(result.user, 'online')
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
    return await usersVRef.orderByChild('uid').equalTo(user.uid).once('value', async (snapshot) => {
        if(!snapshot.exists()) {
            let userData = {
                "uid": user.uid,
                "online_visibility" : 'online'
            }

            await usersVRef.push(userData)
            return userData;
        }
    })
}

export async function getUserOnlineStatus(user) {
    return await usersVRef.orderByChild('uid').equalTo(user.uid).once('value', async (snapshot) => {
        if(!snapshot.exists()) {
            return await userHasOnlineStatus(user)
        }
        return snapshot.exportVal();
    })
}

export async function updateUserOnlineVisibility(user, appearance) {
    await userHasOnlineStatus(user);
    return await usersVRef.orderByChild("uid").equalTo(user.uid).once("value", (snapshot) => {
       return _.filter(snapshot.val(), async function (userValue, key) {
            return await db.database().ref(`onlineStatus/${key}`).set({
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





