export default function cleanName(str, clean1, clean2){
    return  (str.replace(clean1, '')).replace(clean2, '');
}