import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

const store = new createStore({
    state() {
        return {
            currentUser: null,
            pageLoading: true,
            authTypeLogin: true,
            users: [],
            newChatUser: null,
        }
    },

    getters: {
        getUserIsLoggedIn: state => {
            return !_.isNil(state.currentUser);
        },

        getPageIsLoading: state => state.pageLoading,

        getNewChatUser: state => state.newChatUser,

        getCurrentUser: state => state.currentUser,

        getAllUsers: state => state.users,

        getAuthType: state => state.authTypeLogin
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

        SET_NEW_CHAT(state, user) {
            state.newChatUser = user;
        },

        SET_CHAT_STOP(state) {
            state.newChatUser = null;
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

        setChatStop({commit}) {
            commit('SET_CHAT_STOP')
        }
    }
})

export default store;