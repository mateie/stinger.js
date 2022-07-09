import StingerJS from ".";

(async () => {

    try {
        const api = new StingerJS();

        const account = await api.getAccount({ name: 'Mateie', tag: '0725' });
        const mmr = await api.getMMR({ name: 'Mateie', tag: '0725', region: 'na' });
        const mmrHistory = await api.getMMRHistory({ name: 'Mateie', tag: '0725', region: 'na' });
        const mmrUUID = await api.getMMRByPUUID({ puuid: '72d09134-a294-51d3-b138-077b6d6f1c27', region: 'na'})
    } catch (err) {
        console.error(err);
    }
})();