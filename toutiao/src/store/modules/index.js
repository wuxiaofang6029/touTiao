import {
    getSetting,
    listSetting
} from '@/data/index';

const state = {
    channels: [],
    list: [],
    listData: []
}

const mutations = {
    updateChannels(state, channels) {
        state.channels = channels;
    },
    updateList(state, list) {
        list.map((item, idx) => {
            return state.listData.push(JSON.parse(item.content))
        })
    }
}

const actions = {
    async getSetting({
        commit
    }) {
        let channels = await getSetting()
            // console.log('channels--------------------', channels)
        commit('updateChannels', channels.channels[0])
    },
    async listSetting({
        commit
    }, url) {
        state.listData = []
        let list = await listSetting(url);
        commit('updateList', list.data)
    }
}

export default {
    namespaced: true,
    mutations,
    state,
    actions
}