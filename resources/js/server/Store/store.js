import { createStore } from 'vuex'

const store = new createStore({
    state() {
        return {
            currentUser: null,
            pageLoading: true,
            authTypeLogin: true,
            chats: [],
            activeChat: {
                user: null,
                chatKey: null,
                dbKey: null,
            },
            friends: {
                addFriends: false,
                listType: 'all',
                pendingRequests: 0,
                popup: {
                    user_uid: null,
                }
            }
        }
    },

    getters: {
        //CurrentUser
        getUserIsLoggedIn: state => {
            return !_.isNil(state.currentUser);
        },
        getCurrentUser: state => state.currentUser,

        //Auth
        getPageIsLoading: state => state.pageLoading,
        getAuthType: state => state.authTypeLogin,

        //Chats
        getAllChats: state => state.chats,

        //ActiveChat
        getNewChatUser: state => state.activeChat.user,
        getNewChatKey: state => state.activeChat.chatKey,
        getNewChatDBKey: state => state.activeChat.dbKey,
        getUserHasChat: state => {
            return !_.isNil(state.activeChat.user)
        },

        //Friends
        getFriendPopupUser: state => state.friends.popup.user_uid,
        getNewPendingRequests: state => {
            return state.friends.pendingRequests > 0
        },
        getPendingRequests: state => state.friends.pendingRequests,
        getFriendsListType: state => state.friends.listType,
        getAddFriends: state => state.friends.addFriends,
    },
    mutations: {
        //CurrentUser
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
        },

        //Auth
        SET_AUTH_TYPE(state) {
            state.authTypeLogin = !state.authTypeLogin;
        },
        SET_PAGE_STATUS(state) {
            state.pageLoading = !state.pageLoading;
        },

        //Chats
        SET_ALL_CHATS(state, chat) {
            state.chats = chat;
        },
        SET_ONE_CHAT_BY_KEY(state, {chat, key}) {
            state.chats[key] = chat;
        },
        SET_ONE_CHAT(state, chat) {
            state.chats.push(chat)
        },
        UNSET_ONE_CHAT(state, chat) {
          let index = _.indexOf(state.chats, chat);

          if(_.isNil(index)) {
              return;
          }

          state.chats.splice(index, 1);
        },

        //ActiveChat
        SET_NEW_CHAT_USER(state, user) {
            state.activeChat.user = user;
        },
        SET_NEW_CHAT_KEY(state, chatKey) {
            state.activeChat.chatKey = chatKey;
        },
        SET_NEW_CHAT_DB_KEY(state, key) {
            state.activeChat.dbKey = key;
        },
        SET_NEW_CHAT_STOP(state) {
            state.activeChat = {};
        },

        //Friends
        SET_ADD_FRIENDS(state) {
            state.friends.addFriends = !state.friends.addFriends;
        },
        SET_FRIENDS_LIST_TYPE(state, type) {
            state.friends.listType = type;
        },
        SET_PENDING_REQUESTS(state, amount) {
            state.friends.pendingRequests = amount;
        },
        SET_FRIEND_POPUP_USER(state, user) {
            state.friends.popup.user_uid = user
        },
    },

    actions: {
        //CurrentUser
        setCurrentUser({commit}, user) {
            commit('SET_CURRENT_USER', user);
        },

        //Auth
        setAuthType({commit}) {
            commit('SET_AUTH_TYPE');
        },
        setPageLoadingStatus({commit}) {
            commit('SET_PAGE_STATUS');
        },

        //Chats
        setAllChats({commit}, users) {
            commit('SET_ALL_CHATS', users);
        },
        setOneChatByKey({commit}, {user, key}) {
            commit('SET_ONE_CHAT_BY_KEY', {user, key})
        },
        setOneChat({commit}, user) {
            commit('SET_ONE_CHAT', user);
        },
        unsetOneChat({commit}, user) {
            commit('UNSET_ONE_CHAT', user);
        },

        //ActiveChat
        setNewChatUser({commit}, user) {
            commit('SET_NEW_CHAT_USER', user);
        },
        setNewChatKey({commit}, chatKey) {
            commit('SET_NEW_CHAT_KEY', chatKey);
        },
        setNewChatDBKey({commit}, key) {
            commit('SET_NEW_CHAT_DB_KEY', key);
        },
        setNewChatStop({commit}) {
            commit('SET_NEW_CHAT_STOP');
        },

        //Friends
        setAddFriends({commit}) {
            commit('SET_ADD_FRIENDS');
        },
        setFriendsListType({commit}, type) {
            commit('SET_FRIENDS_LIST_TYPE', type);
        },
        setPendingRequests({commit}, amount) {
            commit('SET_PENDING_REQUESTS', amount);
        },
        setFriendPopupUser({commit}, user) {
            commit('SET_FRIEND_POPUP_USER', user)
        },
     }
})

export default store;