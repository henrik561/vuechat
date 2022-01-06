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
            },
        }
    },

    getters: {
        getUserIsLoggedIn: state => {
            return !_.isNil(state.currentUser);
        },

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
            state.pageLoading = !state.pageLoading
        },

        SET_ALL_USERS(state, users) {
            state.users = users;
        },

        SET_NEW_CHAT(state, user, chatKey) {
            state.chat.user = user;
        },

        SET_NEW_CHAT_KEY(state, chatKey) {
            state.chat.chatKey = chatKey
        },

        SET_CHAT_STOP(state) {
            state.chat = {};
        },
    },

    actions: {
        setCurrentUser({commit}, user) {
            commit('SET_CURRENT_USER', user);
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
            commit('SET_NEW_CHAT_KEY', chatKey)
        },

        setChatStop({commit}) {
            commit('SET_CHAT_STOP')
        },
    }
})

export default store;