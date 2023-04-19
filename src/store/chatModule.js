export const chatModule = {
  state: () => ({
    replyMsgRef: null,
    replyTarget: null,
    chatId: null,
    selectedUser: null,
    query: null,
    chatsScrollPosition: {},
    chatIdList: [],
    chatsCount: 0,
    chatContainerRef: null,
  }),
  getters: {
    getReplyTarget(state) {
      return state.replyTarget;
    },
    getChatIdList(state) {
      return state.chatIdList;
    },
    getReplyMsgRef(state) {
      return state.replyMsgRef;
    },
    getChatsCount(state) {
      return state.chatsCount;
    },
    getQuery(state) {
      return state.query;
    },
    getChatId(state) {
      return state.chatId;
    },
    getChatId(state) {
      return state.selectedUser;
    },
    getChatsScrollPosition(state) {
      return state.chatsScrollPosition;
    },
    getChatContainerRef(state) {
      return state.chatContainerRef;
    },
  },
  mutations: {
    setReplyTarget(state, target) {
      state.replyTarget = target;
    },
    setChatIdList(state, chats) {
      state.chatIdList = chats;
    },
    setChatId(state, id) {
      state.chatId = id;
    },
    setQuery(state, q) {
      state.query = q;
    },
    setSelectedUser(state, selectedUser) {
      state.selectedUser = selectedUser;
    },
    setReplyMsgRef(state, ref) {
      state.replyMsgRef = ref;
    },
    setChatsCount(state, n) {
      state.chatsCount = n;
    },
    addUniqChatItem(state, item) {
      if (!state.chatsScrollPosition[item.id]) {
        state.chatsScrollPosition[item.id] = item;
      }
    },
    changeChatsScrollData(state, data) {
      // console.log(  'CHANGES IN ', data.id, 'DATA =>' ,data.data );
      state.chatsScrollPosition[data.id][data.key] = data.data;
    },
    setChatContainerRef(state, ref) {
      state.chatContainerRef = ref;
    },
    deleteChat(state, key) {
      console.log("was deleted ?", key);

      delete state.chatsScrollPosition[key];
      
    },
  },

  actions: {
    setReplyTarget({ commit, target }) {
      commit("setReplyTarget", target);
    },
    setChatIdList({ state, commit, chts }) {
      commit("setChatIdList", chts);
    },
    setSelectedUser({ state, commit, user }) {
      commit("setSelectedUser", user);
    },
    setChatId({ state, commit, id }) {
      commit("setChatId", id);
    },
    setQuery({ state, commit, q }) {
      commit("setQuery", q);
    },
    setReplyMsgRef({ state, commit, ref }) {
      commit("setReplyMsgRef", ref);
    },
    setChatsCount({ state, commit, n }) {
      commit("setChatsCount", n);
    },
    addUniqChatItem({ state, commit, item }) {
      commit("addUniqChatItem", item);
    },
    changeChatsScrollData({ state, commit, data }) {
      commit("changeChatsScrollData", data);
    },
    setChatContainerRef({ state, commit, ref }) {
      commit("setChatContainerRef", ref);
    },
  },
  namespaced: true,
};
