let data = require('./test');

let str = "INSERT INTO `mtp_mock_test_question` ( `mock_id`, `ques_id`, `cat_l1_id`, `cat_l2_id`, `created_by`) VALUES";

for( let i=0; i < data.length; i++ ){
    str = str + " ( ";
    for (const key in data[i]) {
        if (data[i].hasOwnProperty(key)) {
            const element = data[i][key];
            str = str +  "'" + element + "', ";
        }
    }
    str = str.slice(0, -2);
    str = str + " ), ";
}
str = str.slice(0, -2);

console.log(str);
