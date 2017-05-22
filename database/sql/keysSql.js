/**
 * Created by hiyoon on 2017-05-22.
 */
exports.getApiKey = "SELECT \n" +
    "    seq, api_key\n" +
    "FROM\n" +
    "    ggs_dev.`keys`\n" +
    "WHERE\n" +
    "    cnt < 1000\n" +
    "ORDER BY seq\n" +
    "LIMIT 1";

exports.updateApiKeyCnt = "UPDATE `keys` \n" +
    "SET \n" +
    "    cnt = cnt + 1\n" +
    "WHERE\n" +
    "    seq = ?";

exports.initApiKeyCnt = "UPDATE `keys` \n" +
    "SET \n" +
    "    cnt = 0\n";