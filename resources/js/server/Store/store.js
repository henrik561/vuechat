import { createStore } from 'vuex'

const store = new createStore({
    state() {
        return {
            currentUser: null,
            pageLoading: true,
            authTypeLogin: true,
            users: [],
            chat: {
                user: null,
                chatKey: null,
                activeChatKey: null,
            },
            friends: {
                addFriends: false,
                listType: 'online',
                pendingRequests: 0,
                popup: {
                    user_uid: null,
                }
            }
        }
    },

    getters: {
        getUserIsLoggedIn: state => {
            return !_.isNil(state.currentUser);
        },

        getFriendPopupUser: state => state.friends.popup.user_uid,

        getActiveChatKey: state => state.chat.activeChatKey,

        getNewPendingRequests: state => {
            return state.friends.pendingRequests > 0
        },

        getPendingRequests: state => state.friends.pendingRequests,

        getFriendsListType: state => state.friends.listType,

        getAddFriends: state => state.friends.addFriends,

        getPageIsLoading: state => state.pageLoading,

        getNewChatUser: state => state.chat.user,

        getCurrentChatKey: state => state.chat.chatKey,

        getUserHasChat: state => {
            return !_.isNil(state.chat.user)
        },

        getCurrentUser: state => state.currentUser,

        getAllUsers: state => state.users,

        getAuthType: state => state.authTypeLogin,
    },
    mutations: {
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
        },

        SET_AUTH_TYPE(state) {
            state.authTypeLogin = !state.authTypeLogin;
        },

        SET_PAGE_STATUS(state) {
            state.pageLoading = !state.pageLoading;
        },

        SET_ALL_USERS(state, users) {
            state.users = users;
        },

        SET_NEW_CHAT(state, user) {
            state.chat.user = user;
        },

        SET_NEW_CHAT_KEY(state, chatKey) {
            state.chat.chatKey = chatKey;
        },

        SET_CHAT_STOP(state) {
            state.chat = {};
        },

        SET_ADD_FRIENDS(state) {
            state.friends.addFriends = !state.friends.addFriends;
        },

        SET_FRIENDS_LIST_TYPE(state, type) {
            state.friends.listType = type;
        },

        SET_PENDING_REQUESTS(state, amount) {
            state.friends.pendingRequests = amount;
        },

        SET_ACTIVE_CHAT_KEY(state, key) {
            state.chat.activeChatKey = key;
        },

        SET_FRIEND_POPUP_USER(state, user) {
            state.friends.popup.user_uid = user
        },
    },

    actions: {
        setCurrentUser({commit}, user) {
            commit('SET_CURRENT_USER', user);
        },

        setActiveChatKey({commit}, key) {
            commit('SET_ACTIVE_CHAT_KEY', key);
        },

        setAuthType({commit}) {
            commit('SET_AUTH_TYPE');
        },

        setPageLoadingStatus({commit}) {
            commit('SET_PAGE_STATUS');
        },

        setAllUsers({commit}, users) {
            commit('SET_ALL_USERS', users);
        },

        setNewChat({commit}, user) {
            commit('SET_NEW_CHAT', user);
        },

        setNewChatKey({commit}, chatKey) {
            commit('SET_NEW_CHAT_KEY', chatKey);
        },

        setChatStop({commit}) {
            commit('SET_CHAT_STOP');
        },

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