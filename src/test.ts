import StingerJS from ".";

(async () => {

    try {
        const api = new StingerJS();

        const account = await api.getAccount({ name: 'Mateie', tag: '0725' });
        const mmr = await api.getMMR({ name: account.data?.name as string, tag: account.data?.tag as string, region: 'na', version: 'v2' });

    } catch (err) {
        console.error(err);
    }
})();