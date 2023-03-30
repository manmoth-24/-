//sitsとsite_namesそれぞれリンクしていて、sitsの一つ目がURLでsite_namesの一つ目は表示になっています
let links = [
    {name: "google", link: "https://www.google.com/"},
    {name: "Youtube", link: "https://www.youtube.com/"},
    //Empをtrueにすると文字が大きく表示されます。
    {name: "gitHub", link: "https://github.com/", Emp: true},
    {name: "Unity", link: "https://unity.com/ja"},
    {name: "GoogleEarth_Japan", link: "https://earth.google.com/web/search/Japan/@33.49985597,137.15240497,6.35173584a,3971589.28306224d,35y,0h,0t,0r/data=CnAaRhJACiUweDM0Njc0ZTBmZDc3ZjE5MmY6MHhmNTQyNzVkNDdjNjY1MjQ0Gcu3Pqw3GkJAIfSLEvQXSGFAKgVKYXBhbhgCIAEiJgokCd2rt1WjXTNAEdyrt1WjXTPAGepSUnacoURAIWx_WZrEj03AOgMKATA?authuser=0"}
];

const makeList = (emp,name,link,linkName) =>{
    if(emp){
        return `<tr><td class="Kyotyo"> ${name} </td><td><a href=" ${link}" target="_blank" class="Kyotyoa"> ${linkName} </a></td></tr>`
    }else{
        return `<tr><td> ${name} </td><td><a href=" ${link}" target="_blank" class="Kyotyoa"> ${linkName} </a></td></tr>`
    }
    
}

document.writeln('<h1>ブックマーク.out</h1>');

document.writeln('<table border="1" align="center">');
links.forEach((list) =>{
    if(list.link.length < 50){
        document.writeln(makeList(list.Emp,list.name,list.link,list.link));
    }else{
        document.writeln(makeList(list.Emp,list.name,list.link,list.name));
    }
});
    document.writeln("</table>");
