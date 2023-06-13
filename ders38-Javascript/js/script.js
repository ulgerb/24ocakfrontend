
// var s1 = 15;
// var s2 = "35";
// var s3 = "25";
// console.log( String(s1) + String(Number(s2) + Number(s3)) );
// 1560


// s1=5 , s2="15", s3="20"
// 535, 2010, 40
// var s1=5;
// var s2="15";
// var s3="20";

// console.log( String(s1) + String(Number(s2) + Number(s3)) );
// console.log( (s3) + String(Number(s2)-s1) );
// console.log( s1 + Number(s2) + Number(s3) );

// s1=8 , s2="22", s3="10", s4=15
// 3025, 4015, 327
// var s1 = 8;
// var s2 = "22";
// var s3 = "10";
// var s4 = 15;
// console.log( String((s1) + Number(s2)) + String(Number(s3) + s4) );
// console.log( String(s1+Number(s2)+Number(s3)) + String(s4) );
// console.log( String(Number(s2) + Number(s3)) + String(s4-s1) );
// 822+25 = 847
// console.log( Number(String(s1) + s2) + (Number(s3)+s4) );

// STRING METHODLARI
// var text = "Merhaba String Methodları";
// STRING PARÇALAMA
// slice( başlangıç, bitiş )
// console.log( text[8] ); // textin içerisindeki 0.indexli elemanı bana getir = S
// console.log( text.slice(8,14) ); // String
// console.log( text.slice(10)); // ring Methodları
// console.log( text.slice(0, 10)); // Merhaba St
// console.log(text.slice(8, -4)); // String Method
// console.log(text.slice(-8, -2)); // thodla

// İNDEX BULMA - indexOf()
// -1 sonucunu verirse yoktur
// "soluta"dan sonraki 20 karaktesi ekrana yazdır.
// var text1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Ipsam SolutA error cupiditate amet voluptatum provident accusamus ea, distinctio perspiciatis eius architecto, sint consequuntur in !Praesentium dolore dolores iure dolorum beatae!"
// console.log( text.indexOf("String") ); // 8
// // text1 = text1.toLocaleLowerCase() // tüm metni küçük harf yapar
// var s_index = text1.toLowerCase().indexOf("soluta") // 63
// console.log(text1.slice(s_index,s_index+20), s_index);


// var text2 = "Bugün işe eRkeN Gittim."

// console.log(text2.toLowerCase().slice(5,15).indexOf("erken"));


// Array
// var list1 = ["Ahmet","Mehmet","Ayşe","Hüseyin","Fatma"];
// console.log(list1[2]);
// var list2 = ["elma",10,25,"armut",[1,2,3],{"k1":"v1"}]
// console.log(typeof list2[5]); // type öğrenme
// console.log(list2[0].length); // uzunluk bulma
// console.log(list2.indexOf("armut")); // indexi bulma



// liste olduğunu belirtmek için köşeli parantez kullanılır.
// liste içerisinde eleman çekebilmek için index numarası kullanılır.
// örnek: arry[index]

// ELEMAN DEĞİŞTİRME
// list1[3] = "Yavuz";


// LİSTEYE EKLEME
// arr.push("Eklenen")
// list1.push("Buket")
// list1.push("Mahmut","Merve")

// LİSTEDEN ÇIKARMA
// arr.pop(index) // pop içerisi boş olduğunda sonrakini çıkartır
// list1.pop() // içerisi boşsa son elemanı çıkartır
// list1.splice(1,1) // splice(başlangıç, kaç eleman çıkarılıcak) liste içerisinden çıkarma işlemi yapmak için
// list1.splice(2,1)

// LİSTEYİ TERS ÇEVİRME
// arr.reverse()
// list1.reverse()
// console.log(list1);


// LİSTEDE INDEX NUMARASI BULMA
// var list3 = [50,40,20,30,40,10];
// console.log( list3.indexOf(40,3) );


// LİSTE İÇERİSİNDEKİ UZUNLUK length
// const arr1 = [5, 2, 17, 9, 12]

// arr1.push(11,40,30)
// console.log("arr1 uzunluk: ",arr1.length);
// if(arr1.length >= 8){
//    alert("listeniz çok uzun!")
// }


// İÇ İÇE LİSTELER
// var arr2 = ["elma", "bir", "kalem", [10, 20, ["a", "b"]], "101"]


// örn: yukardaki listede 20 değerini 5 ile çarpıp ekrana yazdır
// console.log( arr2[3][1] * 5 );

// örn: yukardaki listede "101" değerini 2 ile çarpıp ekrana yazdır
// console.log(Number(arr2[4]) * 2);

// örn: yukardaki listede "a" değerini ekrana yazdır
// console.log( arr2[3][2][0] );

// örn: yukardaki listede "a" ve "b" değerlerini kullanarak baba yazdır
// console.log(arr2[3][2][1] + arr2[3][2][0] + arr2[3][2][1] + arr2[3][2][0] );

// console.log(baba);

// örn: boş bir liste tanımlayın boş arr3 içerisine 4 isim girin
// var arr3 = []
// arr3.push("Ayşe","Kazım")
// arr3.push("Merve","Mehmet")

// örn: arr3 içerisinden son elemanı çıkartır
// arr3.pop()

// örn: arr3 içerisinde 1. indexe sahip elemanı farklı isimle değiştirin
// arr3[1] = "Ahmet"
// console.log(arr3);


// LİSTEDE SIRALAMA sort
// arr1.sort()
// arr2.sort(function (a, b) { return a - b }) // sayılara sıralama yaptırmak için

// var list2 = [20,5,25,50,2]
// list2.sort(function(a,b){return a-b}) // küçükten büyüğe sıralama
// list2.reverse()
// list2.sort(function(a,b){return b-a}) // büyükten küçüğe sıralama
// console.log(list2);

// LİSTE İÇİNDE BELİRLİ ELEMANLARI ALMA
// console.log(list2.slice(1,-1));
// console.log(arr4.slice(0,-1))

// LİSTE İÇİNDEN INDEXE GÖRE ÇIKARMA
// list2 = [20, 5, 25, 50, 2]
// // arr4.splice(0,1) // (çıkan elemanın indexi, çıkartılıcak eleman sayısı)
// list2.splice(1,0,10) // indexe göre eleman ekleme
// console.log(list2);

// örn: [18,5,10,55,2] listesini büyükten küçüğe sıralayın

// var arr5 = [18,5,10,55,2]
// 1. Yöntem
// arr5.sort(function(a,b){return b-a}) // büyükten küçüğe sıralama
// 2. Yöntem
// arr5.sort(function(a,b){return a-b}) // küçükten büyüğe sıralama
// arr5.reverse()

// var arr5 = [22,10,5,15,25]
// // örn: yukardaki listeden 2.indexi çıkartın, yerine 20 sayısını ekleyin
// arr5.splice(2,1,20)

// // örn: yukardaki listenin sonuna 2 eleman ekleyin ve ekrana 2.indexten sonrasını yazdırın
// arr5.push(100,40)
// arr5.slice(2) // [20, 15, 25, 100, 40]
// console.log(arr5.slice(2));

// // örn: yukardaki listeyi sort kullanarak küçükten büyüğe sıralayın
// arr5.sort(function(a,b){return a-b})
// console.log(arr5);

// ÖDEV: arr6 = ["elma","armut","kiraz","muz"]
// yukardaki elemanın 1. ve 3. elemanlarının yazılarını method kullanarak büyük harfe dönüştürün,


// 2 listeyi toplama

// var list1 = ["bir","iki","üç"]
// var list2 = [1,2,3]
// var list3 = list1.concat(list2)
// console.log(list3);

// ===========================================================================================
// const obje1 = {"key1":"value1","key2":"value2"}
// const obje2 = {
//     "name":"Berkay",
//     "surname":"Ülger",
//     "age":27,
//     "address":"Bakırköy",
//     mail:"basriberkay@gmail.com",

// }
// const list1 = [
//     "value1", // index = 0
//     "value2", // index = 1
// ]
// console.log(list1[1]);
// console.log(obje2["mail"]);
// // console.log(list1.1);
// console.log("name:",obje2.name, "- email:",obje2.mail);

// // obje elemanı değiştirme: eleman seç="new eleman"
// obje2["address"] = "Kadıköy"

// // obje içerisine eleman ekleme
// obje2["tc"] = "22222222222"

// // obje içerisinde eleman silme
// delete obje2["surname"]

// console.log(obje2);

// Object DATA BASE içerisinde kullanılır ve sözlük yapısıdır.

// var user = {
//     "name":"Berkay",
//     "surname":"ÜLGER",
//     "username":"berkay123",
//     "password":"123"
// }


// örn: user içinden kullanıcı adı ve şifreyi ekrana yazdır.
// console.log(user.username, user["password"])




// PROMPT KULLANICIDAN DEĞER ALMA
// prompt string yapıda tanımlanır toplama yaparken dönüştürmemiz gerekir
// var p1 = prompt("1.notunuzu giriniz")
// var p2 = Number(prompt("2.notunuzu giriniz"))
// console.log((Number(p1)+p2)/2);

// örn: s1 ve s2 kullanıcıdan alınsın bu sayıları toplayıp 10 ile çarpın
// var s1 = Number(prompt("s1: "))
// var s2 = Number(prompt("s2: "))
// console.log( (s1+s2)*10 );


// deger = prompt("bir sayı giriniz")

// IF ELSE
// var s1 = "içecek"
// if("meyve" == s1){
//     console.log("meyve alıyorsun");
// }

// if(false==false){

// }


// if(false){ // if içerisi true ise çalışır değilse çalışmaz
//     console.log("if çalışır");
// }else{ // if çalışmazsa else çalışır
//     console.log("else çalışır");
// }

// var yas = 22
// if(yas>18){
//     console.log("içeri girebilir");
// }else{
//     console.log("içeri giremez!!!!!!");
// }

// KARŞILAŞTIRMA OPERATÖRLERİ (true yada false 2 sonucu vardır)
/*
== eşitse true
=== herşeyiyle eşit mi true
!= eşit değilse true
< küçüktür true
<= küçük yada eşit true
> büyüktür true
>= büyük yada eşittir true
&& (and) (ve) bağlaç
|| (or) (yada) bağlaç
*/
// if(true){}
// if(12>18){}

// console.log( 12 > 12 ); // false
// console.log( 22 > 18 ); // true
// console.log( 12 == 14 ); // false
// console.log( 12 != 14 ); // true
// console.log( 15 <= 18 ); // true
// console.log( 15 <= 15 ); // true
// console.log( "======", true == 1 );
// console.log( "======", false == 0 );

// 18 ile 55 yaş aralığında ise içeri girebilir
// var yas = 15;
// if (yas < 18){
//     console.log("giremez!!!!");
// }else if (yas > 55){
//     console.log("giremez!");
// }else{
//     console.log("girebilir...");
// }

// if(18<yas && yas<55){ // &&(ve) operatörü iki karşılaştırmanında true olması durumunda true değer döndürür, çalışır
//     console.log("girebilir...");
// }else{
//     console.log("giremez!");
// }

// document.write("asdasd")
// console.log(18 < yas && yas < 55);
// ÖNEMLİ NOTLAR
// if parantez içindeki sonuç true ise çalışır
// false ise çalışmaz
// else, if çalışmadığında (false döndürdüğünde) çalışır
// 1 değeri true anlamı taşır, 0 değeri false anlamı taşır
// else if, if koşulumdan false değer alıyorsam "else if" içerisindeki koşuluma bakar eğer bundanda false sonucunu alıyorsam altındaki çalışır
// eğerki if bloğundaki koşullarından birisi true dönüyorsa altındaki koşullara bakmaz
// &&(ve)(and) (true && true) == true operatörü iki karşılaştırmanında true olması durumunda true değer döndürür, çalışır
// && ve bağlacında bir false olsa bile çalışmaz(false değeri döndürür)
// || (yada)(or) (false || false) == false tek bir true değer bile varsa çalışır, true değeri döndürür
// console.log( ((false || false) || true) && true );


// # === öğrencinin ortalaması 50 üstüyse geçti altıysa kaldı yazdıran programı yazın
// prompt ortalama, number dönüştür, if 50<ortalama,
// var ortalama =  Number(prompt("öğrencinin ortalamasını giriniz"));
// if (ortalama>=50){
//     console.log("sınavı geçti..");
// }else if(ortalama<50){
//     console.log("sınavdan kaldı..");
// }


// # inputta(kullanıcı) alınan sınav notu.öğrenci, 50 altı aldıysa "kaldı" 50 üstüyse "iyi" 80 üstüyse "başarılı"
// var note = Number(prompt("öğrenci notu: "))

// if(note>80){
//     console.log("başarılı");
// }else if(note>=50){
//     console.log("iyi");
// }else{
//     console.log("kaldı");
// }

// if(50<=note && note<80){
//     console.log("iyi");
// }else if(note<50){
//     console.log("kaldı");
// }else{
//     console.log("başarılı");
// }

// # === partiye girenlerin yaşı 18 in üstündeyse ekrana girebilir altıysa giremez yazdırsın. 55 yaş üstü giremez yazsın

// # === manav = ["elma","armut","kiraz","portakal", "muz"] , kullanıcıdan girilen meyvenin manavda olup olmadığını kontrol edin
// var manav = ["elma", "armut", "kiraz", "portakal", "muz"]
// var meyve = prompt("meyve giriniz")
// if (manav[0] == meyve || manav[1] == meyve || manav[2] == meyve || manav[3] == meyve || manav[4] == meyve){
//     console.log("manavda meyve var...");
// }else{
    //     console.log("manavda kalmamış!!!");
    // }
// var x = true;
// for(i=0; i<manav.length;i++){
//     if(manav[i]==meyve){
//         console.log("manavda meyve var...");
//         x = false;
//         break
//     }
// }
// if(x) {
//     console.log("manavda kalmamış!!!");
// }

// # === galeri = ["kia", "bmw", "mercedes", "ford","audi"]
// galeride kullanıcının aradığı araba markası var mı?
// var galeri = ["kia", "bmw", "mercedes", "ford", "audi"]
// var arac = prompt("hangi marka araba arıyosunuz")
// if (galeri[0] == arac || galeri[1] == arac || galeri[2] == arac || galeri[3] == arac || galeri[4] == arac){
//     console.log("aradığınız araç galerimizde bulunuyor");
// }else{
//     console.log("aradığınız araç galerimizde YOK!!!");
// }

// # === kullanıcıdan girilen değerin 5'e tam bölünüp bölünmediğini söyleyen programı yazın
// var s1 = Number(prompt("bir sayı giriniz"))
// if (s1%5 == 0){
//     console.log("tam bölünür..");
// }else{
//     console.log("tam bölünmez!!");
// }


// # === girilen sayının çift mi tek mi olduğunu bulunuz
// var s2 = 500
// if(s2%2 === 0){
//     console.log("çift");
// }else{
//     console.log("tek");
// }


// # ===  girilen sayı pozitif mi negatifmi

// var s1 = 55;
// if(s1>0){
//     console.log("pozitif");
// }else if (s1<0){
//     console.log("negatif")
// }else{
//     console.log("nötr");
// }


// # === ÖDEV kullanıcıdan girilen isim soyisim baş harfleri büyükse ekrana kaydı tamamla yazsın
// var full_name = prompt("ad ve soyad: ") // "berkay Ülger"
// var findex = full_name.indexOf(" ")
// if (full_name[0] == full_name[0].toUpperCase() && full_name[findex+1] == full_name[findex+1].toUpperCase() ){
//     console.log("Kaydınız tamamlandı..");
// }else{
//     console.log("Lütfen baş harfleri büyük yazalım !!!");
// }

// var listname = full_name.split(" ") // ["berkay","Ülger"]
// if (listname[0][0] == listname[0][0].toUpperCase() && listname[1][0] == listname[1][0].toUpperCase()){
//     console.log("Kaydınız tamamlandı..");
// }else{
//     console.log("Lütfen baş harfleri büyük yazalım !!!");
// }

// var fname = prompt("isim: ")
// var lname = prompt("soyisim: ")
// if (fname[0] == fname[0].toUpperCase() && lname[0] == lname[0].toUpperCase() ){
//     console.log("Kaydınız tamamlandı..");
// }else{
//     console.log("Lütfen baş harfleri büyük yazalım !!!");
// }


// ÖDEV s1 ve s2 değişkenlerim olsun s1 veya s2 nin 100den büyük olduğu durumda ekrana 2 değerin toplamını yazdırın,2sininde küçük olduğu durum için büyük olanı küçük olandan çıkart
// let s1 = 50;
// let s2 = 20;
// if (s1>100 || s2>100 ){
//     console.log(s1+s2)
// }else if(s1<100 && s2<100){
//     if(s1>s2){
//         console.log(s1-s2);
//     }else if(s2>s1){
//         console.log(s2-s1);
//     }
// }

// hastane sonuçları
// ÖDEV x sayısı 50 ile 100 arasındaysa yüksek değer, 0 50 arası normal, 100 150 arası çok yüksek değer
// var x = 140;
// if(50<x && x<100){
//     console.log("Yüksek Değer");
// }else if(0<= x && x <=50){
//     console.log("Normal Değer");

// }else if(100<= x && x <=150){
//     console.log("Çok Yüksek Değer");

// }


// AND(ve) == && ve OR(veya) == || OPERATORLERİ
// && and operatorü, çalışabilmesi için 2 koşulunda true dönmesi gerekir
// || or operatorü, çalışabilmesi için 1 tane true olması yeterli




// # === sisteme giriş yaptırma kullanıcı adı ve şifre ile
// const data_user = [
//     {"username":"berkay1", "password":"111"},
//     {"username":"ahmet2", "password":"222"},
//     {"username":"hilal3", "password":"333"},
// ] ;
// let username = "berkay1";
// let password = "333";


// if (data_user[0].username === username && data_user[0].password === password){
//     console.log("Giriş Yaptınız..");
// }else{
//     console.log("kullanıcı adı veya şifre yanlış !!!");
// }

// # === kullanıcının girdiği cümle 10 karakterin altındaysa daha uzun bir cümle yazınız diyen programı yazınız

// let text = "nasılsın ...";
// if (text.length<10){
//     console.log("daha uzun bir cümle yazınız..");
// }else{
//     console.log("cümleniz onaylandı");
// }



// kullanıcıdan girilen cümlede kafa kelimesi geçiyorsa *** olarak değiştirilsin, kafa kelimesi geçiyorsa uyarı versin

// let text = "bugün aklım çok katışık";
// // text = text.replace("kafa","***")
// console.log(text.indexOf("kafa"));
// if (text.indexOf("kafa") != -1){
//     console.log("Argo kelime kullanamazsınız !!!");
// }else{
//     console.log(text);
// }

// damsız giremezsin!, kadın sayısı erkek sayısından büyük yada eşit olmalı,
// en fazla kadın sayısının 1 fazlası ise girsin
// let k = 3;
// let e = 5;

// if(k+1 >= e){
//     console.log("içeri girebilirsin");
// }else{
//     console.log("içeri giremezsin !!!");
// }

// Ehliyet sistemi
// eğer yaş 18 den küçükse ehliyet alamazsınız
// eğer yaş 18 ise ehliyet alabilirsiniz
// eğer yaş 19 ve üzeri ise siz hala ehliyet alamadınız mı

// let age = 32;
// if(age<18){
//     console.log("Ehliyet Alamazsın!!!");
// }else if(age==18){
//     console.log("Ehliyet alabilirsin");
// }else{
//     console.log("Siz hala ehliyet almadınız mı?");
// }

/*
ÖDEV
// ARAÇ LASTİK UYARI SİSTEMİ
// 1) kaç lastikte problem var
// 2) problem nedir

// 1 lastik havası indiyse "sürmeye devam edilebilir"
// 1 lastik patlak ise "yavaşla"
// 2 lastik havası indiyse "lastiklerin havasını şişir"
// 2 lastik patlak ise "aracı durdurun"
problem = prompt("problem nedir?")
lastik = Number(prompt("kaç lastikte problem var?"))
*/


// FOR - Döngü
// for(başlangıç ; bitiş ; artış){}
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");
// console.log("merhaba");

// for(i=0 ; i<10 ; i++){
//     console.log("merhaba");
// }

// for(i=9 ; i>=2 ; i--){
//     console.log(i);
// }

// let list1 = ["elma","armut","kiraz","kavun"]
// console.log(list1[0].toUpperCase());
// console.log(list1[1].toUpperCase());
// console.log(list1[2].toUpperCase());
// console.log(list1[3].toUpperCase());
// for(i=0 ; i<4 ; i++){
// console.log(list1[i].toUpperCase());
// }


// ÖDEV birden 10 a kadar olan sayıları ekrana yazdırın.
// for (i=0 ; i<10 ; i++){
//     console.log(i)
// }

// ÖDEV 1 den 50 ye kadar olan çift sayıları Console’a yazdırınız.
// for (i=1;i<50;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// for (i=0;i<50;i+=2){
//     if(i>=1){
//         console.log(i);
//     }
// }
// i=1 çıktı= ...
// i=2 çıktı= 2
// i=3 çıktı= ...
// i=4 çıktı= 4

// ÖDEV 1 - 100 arası 3 ve 5 e tam bölünen sayılar
// for(i=1;i<100;i++){
//     if(i%3==0){
//         if(i%5==0){
//             console.log(i);
//         }
//     }
// }
// for(i=1;i<100;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
//     }
// }



//  5er 5er artan 20den 100e kadar sayılarım olsun
// bu sayıların toplamını konsola yazdırın
// for(başlangıç, bitiş, artış){}

// var toplam = 0;
// for(i=20;i<100;i+=5){ // 20, 25, 30, 35
//     toplam += i
// }
// console.log(toplam);



// let list1 = ["elma","armut","kiraz","muz", "karpuz","kavun","kayısı"]
// liste içerisindeki elemanların elmaysa ekrana "kilosu 15tl"
// armut 18, kiraz 22, muz 20, yazdırsın
// for(i=0; i<4; i++){
//     if(list1[i] == "elma"){
//         console.log("elma 15tl");
//     } else if (list1[i] == "armut"){
//         console.log(list1[i]+" 18tl");
//     } else if (list1[i] == "kiraz"){
//         console.log(list1[i]+" 22tl");
//     } else if (list1[i] == "muz"){
//         console.log(list1[i]+" 20tl");
//     }
// }

// console.log(list1.length);
// for (i = 0; i < list1.length ; i++){
//     console.log(list1[i]);
// }


//  kullanıcıdan bir cümle alın, bu cümlenin içerisinde
// kaç a harfi varsa o kadar ekrana cümleyi yazdırılsın.
// var text = "buralarda hiç alışveriş marketi yok";
// for(i=0 ; i<text.length ; i++){
//     if(text[i] === "a"){
//         console.log(text);
//     }
// }



// alıştırma === 1. kullanıcı şifre giriş sistemi yapın 3 deneme hakkı bulunsun,
// 2. denemenin sonunda blocklandınız yazdırsın

// const user = {
//     "username":"berkay1",
//     "password":"111",
// }

// let nonlogin = true;
// for(i=0; i<3; i++){ // 0 ---
//     var username = prompt("username");
//     var password = prompt("password");
//     if(username === user.username && password === user.password ){
//         console.log("giriş yaptınız");
//         nonlogin = false;
//         break; // döngüyü sonlandır
//     }else{
//         console.log("kullanıcı adı veya şifre yanlış !!!", "  kalan hak:", 2-i);
//     }

// }

// if(nonlogin){
//     console.log("Sistemden Bloklandınız");
// }



// alıştırma === 50ye kadar olan sayıların 3e veya 7ye bölünenleri ekrana yazdırın
// for (i=0;i<50;i++){
//     if(i%3==0 && i%7==0){
//         console.log(i);
//     }
// }
// for (i=0;i<50;i++){
//     if(i%3==0){
//        if(i%7==0){
//            console.log(i);
//        }
//     }
// }


// for (i=0;i<50;i++){
//     if(i%3==0 || i%7==0){
//         console.log(i);
//     }
// }
// for (i=0;i<50;i++){
//     if(i%3==0){
//         console.log(i);
//     }else if (i % 7 == 0){
//         console.log(i);
//     }
// }

// var products = [
//     {"title":"samsung s22","category":"telefon", "price":20000 },
//     {"title":"iphone s22","category":"telefon", "price":23000 },
//     {"title":"vivo s22","category":"telefon", "price":12000 },
//     {"title":"xiaomi s22","category":"telefon", "price":34000 },
//     {"title":"huwaei s22","category":"telefon", "price":11000 },
//     {"title":"nokia s22","category":"telefon", "price":9000 },
//     { "title": "A TV", "category":"elektronik", "price":55000 },
//     { "title": "B Kahve Makines", "category":"elektronik", "price":22000 },
//     {"title":"C Saç kurutma","category":"elektronik", "price":1000 },
//     {"title":"Nike Ayakkabı","category":"giyim", "price":2000 },
// ]
// // DETAY SAYFASI
// // for(başlangıç, bitiş, artış), i değerini ürünleri getirmek için kullan 
// for(i=0; i<products.length; i++){
//     console.log("Title: ",products[i].title);
//     console.log("Category: ",products[i].category);
//     console.log("Price: ",products[i].price);
//     console.log("==========",);
// }




// ÖDEV === "patatesli ekmek" yazısında kaç tane e harfi olduğunu bulan kodu yazınız
// var text = "patatesli ekmek";
// var e_sayac = 0;
// for(i=0; i<text.length; i++){
//     if (text[i] === "e"){
//         e_sayac += 1;
//     }
// }
// console.log(e_sayac);


// ÖDEV === 3 deneme hakkı olan kullanıcı 
// text="mermer merve mermer merve mermer merve"
// // yazmaya çalışsın eğer doğruysa helal olsun yazdıran kodu yazın

// for(i=0; i<3; i++){
//     if(text == prompt("3 kere mermer merve yaz")){
//         console.log("helal olsun!!");
//         break;
//     }else{
//         console.log("yanlış yazdınız..");
//     }
// }


// ÖDEV === kullanıcıdan alınan sayıyı, 0dan o sayıya kadar ekrana yazdırın, 
// sayı 20nin üstündeyse "sayı yüksek" yazzarak döngüyü yazdırmasın,
// var bitis = Number(prompt("bitiş değeri"))
// if(bitis<=20){
//     for (i=0; i<bitis ; i++){
//         console.log(i);
//     }
// }else{
//     console.log("Sayı Çok Yüksek");
// }

// ÖDEV
// 4 deneme hakkı olan ve her serferinde şifre sorulur banka sistemine 
// giriş yaptıktan sonra para mı çekicek yoksa para mı yatırıcak, 
// yatırıcaksa ana paraya eklenir. anapara=50000
// var anapara = 50000;
// var banka_data = {"password":"123"};
// for(hak=3; hak>=0; hak--){
//     var password = prompt("şifre");
//     if(banka_data.password === password){
//         console.log("Sisteme Giriş Yaptınız");
//         var sorgu = prompt("para çek(1) para yatır(2)");
//         if(sorgu == "1"){
//             var miktar = Number(prompt("ne kadar çekiceksin"))
//             anapara -= miktar;
//         }else if(sorgu == "2"){
//             var miktar = Number(prompt("ne kadar yatırıcaksın"))
//             anapara += miktar;
//         }
//         console.log("kalan bakiye:",anapara);
//         break
//     }else{
//         console.log("şifreniz yanlış!!!","hak:", hak);
//     }
// }


// ÖDEV 5 kişi listemiz olsun, notları olucak, devamsızlık sayıları 
// olucak, notu 50 üstüyse geçsin, devamsızlığı 10 ve üstü olanlar
//  kalsın, devamsızlığı en fazla 3 olana teşekkür belgesi,
// notu 100 bile olsa 10 devamsızlık yapan kalıyor.
// var ogrenci = [
//     {"ad":"Ali", "not":55, "devam":12},
//     {"ad":"Ayşe", "not":45, "devam":7},
//     {"ad":"Mehmet", "not":75, "devam":5},
//     {"ad":"Kazım", "not":95, "devam":0},
//     {"ad":"Hayriye", "not":15, "devam":15},
// ]
// çıktı: ali 12 devamsızlığını bulunduğu için kaldınız
// çıktı: ayşe 3 devamsızlık ve notunuz 70 olduğundan teşekkür belgesi aldınız
// 10devamın üstünde veya notu 50nin altındaysa kaldı

// for(i=0; i<ogrenci.length ; i++){
//     if(ogrenci[i].devam>=10 || ogrenci[i].not < 50){
//         console.log(ogrenci[i].ad,"dersten kaldınız sınıf tekrarı!!", "not:",ogrenci[i].not,"devamsızlık:",ogrenci[i].devam );
//     }else{
//         if(ogrenci[i].devam <= 3){
//             console.log(ogrenci[i].ad, ogrenci[i].devam, "devamsızlık ve notunuz", ogrenci[i].not,"olduğundan teşekkür belgesi aldınız"  );
//         }else{
//             console.log(ogrenci[i].ad, ogrenci[i].devam, "devamsızlık ve notunuz", ogrenci[i].not, "sınıfı geçtiniz....");
//         }
//     }
// }



// break, continue anlatılacak
// === while
// çalışma mantığı: if ve forun karışımıdır. while koşul yazılır(true yada false) döngü dönmeye başlar
// while(false){
//     console.log("merhaba");
// }

// var i = 0; // başlangıç
// while(i<10){ // bitiş
//     console.log(i);
//     i++ // artış
// }

// var s1 = 5;
// while(false == 0){
//     if (s1>=30){
//         break; // döngüyü durdurur yada kapatır
//     }
//     console.log("çalışır mı?");
//     s1++;
// }

// var i = 0;
// var end = 1
// while(true == end){
//     if(i>9){
//         end = 0;
//     }
//     console.log(i);
//     i++;
// }

// var bool1 = true;
// var i = 0;
// while(bool1){
//     if(i>9){
//         bool1 = false
//     }
//     console.log(i);
//     i++;
// }


// 0dan 20ye kadar çift sayıları ekrana yazdırın

// var i = 0;
// while(i<20){
//     if(i%2 == 0){
//         console.log(i);
//     }
//     i++;
// }



// 5 kişi listesini sırasıyla ekrana yazdırın
// var listname = ["Ahmet", "Mehmet", "Ali", "Ayşe", "Veli"]
// var i = 0;
// while(i<listname.length){
//     console.log(listname[i]);
//     i++;
// }

// firmanın büyüklüğünü hesaplatın, 3 şirket isimleri olsun, işçi sayıları olsun, işçi sayısı 100 üstüyse "... büyük firmadır" olarak yazdırın altındaysa küçük firma
// let firma = [
//     {"name":"A", "calisan":105 },
//     {"name":"B", "calisan":125 },
//     {"name":"C", "calisan":15 },
// ]

// let i = 0;
// while (i<firma.length){
//     if (firma[i].calisan>=100){
//         console.log(firma[i].name,"Büyük Firmadır");
//     }else{
//         console.log(firma[i].name,"Küçük Firmadır");
//     }
//     i++;
// }





//ÖDEV// meyve listesi oluştur, kullanıcının istediği meyve var mı yok mu kontrol edin. eğer varsa ekrana markette bulunuyor, yoksa kalmamış
// let listmeyve = ["elma", "armut","muz","kivi","kiraz","şeftali","kavun"];
// var search = prompt("hangi meyveyi arıyorsunuz?");

// var i = 0;
// let nonsearch = true
// while (i<listmeyve.length){
//     if (listmeyve[i] == search.toLowerCase()){
//         console.log(search, "matkette bulunuyor");
//         nonsearch = false
//     }
//     i++;
// }
// if(nonsearch){
//     console.log(search,"markette bulunmuyor");
// }

//ÖDEV// liste içerisinde kırtasiye malzemeleri olsun sistemden ürün almak isteyen bir kişi sisteme alacağı ürünü yazar ve sistemde varsa adı yazsın yoksa bulunmuyor yazsın. 
// 2.kısım fiyat listeleride yani sepet=[2 kalem,2 silgi,cetvel] alarak fiyatını hesaplatın.

// ürün listesi, fiyat listesi,
// kullanıcıdan gelen: alacagı ürün,
// 2.kısım bakiye, kullanıcı alışverişi sonlandırsın,

// DATABASE
// let products = [
//     {"id":1, title:"kalem", price:25}, // == basket[i]
//     {"id":2, title:"silgi", price:15},
//     {"id":3, title:"cetvel", price:55},
//     {"id":4, title:"kitap", price:45},
//     {"id":5, title:"pergel", price:60},
// ]
// let basket = [];
// let total = 0;

// while (true){
//     let search = prompt("kırtasiyeden ne alıcaksınız? (alışverişi bitirmek için exit yazınız)");
//     let nonsearch = true;

//     if(search == "exit"){
//         console.log(basket);
//         for(i=0; i<basket.length; i++){
//             total += basket[i].price;
//         }
//         console.log("ödemeniz gereken toplam", total,"₺");
//         break;
//     }

//     for(i=0; i<products.length; i++){
//         if (products[i].title == search.toLowerCase()){
//             console.log(search,"fiyatı",products[i].price);
//             nonsearch = false;
//             basket.push(products[i])
//         }
    
//     }
//     if(nonsearch){
//         console.log("kırtasiyemizde",search, "bulunmuyor...");
//     }
    
// }


// [kalem, silgi, cetvel, kitap, pergel]
// [25, 15, 55, 45, 60]

// prompt ne alıcaksın: kitap, silgi
// sepet = [kitap,silgi, silgi, pergel]
// prompt alışverişi bitirmek için 0 yazabilirsin 





// === function
// belirli kodları içerisinde tutar ve çağrıldığında çalışırlar

// function reCode(){ // eğerki fonksiyon çağrılmıyorsa uykudadır.
//     for(i=0;i<3;i++){
//         if(i==1){
//             console.log("bir");
//         }else{
//             console.log(i);
//         }
//     }
// }

// var x = 10;
// var y = 20;
// function Toplama(){
//     var z = 30
//     console.log(x+y);
// }

// Toplama()
// console.log(x,y);

// function Toplam(x,y){ // fonksiyona dışardan gelen değerleri parantezin içinde yazarız 
//     console.log(x+y);
// }

// Toplam(30,50)
// Toplam(20,10)
// Toplam(225,110)

// function forRange(start, end, step){
//     for(var i=start; i<end; i += step){
//         console.log(i);
//     }
// }
// forRange(5,15,2)
// forRange(10,100,10)


// function Ortalama(vize,final) { 
//     let ortalama = (vize*0.4) + (final*0.6);
//     return ortalama // geriçağırma yada geridöndürme (fonksiyonun karşılığıdır)
// }

// let ahmetortalama = Ortalama(30, 80);
// console.log(ahmetortalama);
// if (50 <= ahmetortalama){
//     console.log("sınavı geçtiniz");
// }else{
//     console.log("sınavdan kaldınız");
// }

// console.log(Ortalama(10,80));

// FORUN FONKSİYONU YAPILCAK
// function forRange(start,end,step){
//     return 
// }
// for (1,4,6){
// }

// ÖDEV
// sınıftaki öğrencilerin  ortalamadan geçip geçmediği durumuu hesaplayın
// fonksiyon
// let data_student = [
//     {"fname":"Ayşe","sinifadi":"12A",quiz:[40,67,39,53]},
//     {"fname":"Ahmet",quiz:[35,55,70,99]},
//     {"fname":"Mehmet",quiz:[88,2,88,2]},
//     {"fname":"Fatmanur",quiz:[22,22, 66,15]},
// ]
// let data_student2 = [
//     {"fname":"a","sinifadi":"12A",quiz:[40,67,39,53]},
//     {"fname":"b",quiz:[35,55,70,99]},
//     {"fname":"c",quiz:[88,2,88,2]},
//     {"fname":"d",quiz:[22,22, 66,15]},
// ]


// quizleri topla 3e böl
// console.log(sinif[0].quiz3);
// console.log(sinif[0]["quiz 4"]);

// 2. data için
// const Ortalama = function (sinif){
//     for(i=0; i<sinif.length; i++){
//         var toplam = 0;
//         for(j=0; j<sinif[i].quiz.length; j++){ // quizleri toplamak
//             toplam += sinif[i]["quiz"][j]
//         }
//         var ortalama = Math.round(toplam / sinif[i]["quiz"].length)
//         if (ortalama >= 50) {
//             console.log(sinif[i]["fname"], ortalama,"ortalamayla dersten geçtiniz");
//         }else{
//             console.log(sinif[i]["fname"], ortalama,"ortalamayla dersten kaldınız!!");
//         }
//     }
// }

// Ortalama(data_student)
// Ortalama(data_student2)


// 1. data için
// function ortalamaSinif(){
//     for(i=0; i<sinif.length; i++){
//         var ortalama = (sinif[i].quiz1 + sinif[i].quiz2 + sinif[i].quiz3)/3;
//         ortalama = Math.round(ortalama)
//         if (ortalama >= 50){
//             console.log(sinif[i]["fname"], ortalama,"ortalamayla dersten geçtiniz");
//         }else{
//             console.log(sinif[i]["fname"], ortalama,"ortalamayla dersten kaldınız!!");
//         }
//     }
// }


// 2 değişkeni toplasın , sonra çarpımından çıkarsın
// const myF1 = function(s1,s2){
//     var toplam = s1+s2;
//     var carpim = s1*s2;
//     var sonuc = carpim - toplam;
//     console.log(sonuc); 
// }

// myF1(10,6)
// myF1(50,2)
// myF1(6,16)


// Function yazıışları
// 1)
// function myF1(){}
// // 2)
// const myF2 = function(){}
// // 3)
// const myF3 = ()=>{}


// ÖDEV
// ehliyet yaşı sorgusu yaşı yeterliyse sınava girebilir, sınavı geçtiyse ehliyeti alabilir

// const ehliyetSonuc = (age)=>{
//     if( age>=18){
//         let quiz = prompt("sınav notunuzu giriniz...")
//         if(quiz >= 70){
//             return "Ehliyet Alabilir.."
//         }else{
//             return "tekrar sınava giriniz"
//         }
//     }else{
//         return "yaşınız yetersiz"
//     }
// }

// console.log('ehliyetSonuc(35): ', ehliyetSonuc(35));
// ehliyetSonuc(25)
// ehliyetSonuc(15)
// ehliyetSonuc(5)



// FOR IN, FOR OF, FOREACH, MAP

// var list1 = ["elma", "armut", "kiraz"]
// console.log("=== normal ===");
// for(i=0; i<list1.length; i++){
//     console.log(list1[i]);
// }

// console.log("=== forin ===");
// for( i in list1){ // i içerisin index numaraları döndürür
//     console.log(list1[i]);
// }
// console.log("=== forof ===");
// for( i of list1){ // i içerisinde elemanları döndürür
//     console.log(i);
// }

// // (i)=>{} arrow function
// console.log("=== foreach ==="); // arr.foreach((eleman, index, liste)=>{...})
// list1.forEach((e,i,arr)=>{ // i içerisinde elemanları döndürür
//     console.log(e,i,arr);
// })

// console.log("=== map ==="); // return ile çalışan isteyen bir fonksiyon
// list1.map((e,i,arr)=>{
//     console.log(e,i,arr);
// })


// ÖDEV kullanıcı girişi listesi tanımlansın tanımlanan kullanıcılar foreach ile dönülücek ve giriş yaptırtılıcak
// var users = [
//     {
//         username: "berkay111",
//         password: "111",
//     },
//     {
//         username: "ali222",
//         password: "222",
//     },
//     {
//         username: "veli333",
//         password: "333",
//     },
// ]

// let username = prompt("kullanıcı adını giriniz");
// let password = prompt("Şifreyi giriniz");
// let warning = true;
// users.forEach((e)=>{
//     if(e.username == username && e.password == password){
//         console.log("hoşgeldiniz...");
//         warning = false;
//     }
// })

// if (warning){
//     console.log("kullanıcı adı veya şifre yanlış!!");
// }

// === DOM ===

// === (document) Seçiciler

// html'de istediğimiz etiketi seçicez
// ve ona özellikler vericez

// let tag1 = document.getElementsByTagName("h1")
// console.log(tag1[0]);
// tag1[0].innerText = "merhaba dom";

// let tag2 = document.querySelector("div")
// console.log(tag2);
// tag2.innerText = "merhaba querySelector";

// let cl1 = document.querySelector(".text")
// console.log(cl1);
// cl1.innerText = "merhaba tag, class ve id seçici";

// let id1 = document.querySelector("#text")
// console.log(id1);
// id1.innerText = "hangisi daha baskın";

// let id2 = document.getElementById("p1");
// console.log(id2);
// id2.innerHTML += ": id seçici";

// let card = document.querySelector(".card");
// console.log(card);
// card.innerHTML = "diğerleri neden gelmedi?";

// === Çoklu seçiciler
// let cards = document.querySelectorAll(".card")
// console.log(cards);
// cards[3].innerHTML = "bu şekilde özellik neden veremiyoruz?";

// for(i=0; i<cards.length; i++){
//     console.log(cards[i]);
//     cards[i].innerHTML = "değişiklik";
// }

// cards.forEach((e,i)=>{
//     if(i%2 == 0){
//         e.innerHTML = "cardların içlerindeki tüm yazıyı değiştirdik"
//     }
// })

// === innerText ve innerHTML farkı
// let div1 = document.querySelector(".div1")
// let div2 = document.querySelector(".div2")

// div1.innerText = "<b>div1</b>"; // yalnızca metine bakar
// div2.innerHTML = "<b style='color:red;url(\"asd\")'>div2</b>"; // HTML hem metine hemde HTML öğesi olup olmadığına bakar
// console.log("merh\naba");

// 3 tane ürünüm olsun bu ürünlerin ilki ve üçüncünün fiyatlarına %50 zam geldi

// let price = document.querySelectorAll(".price")
// console.log(price);
// let zam = 20;
// price.forEach((e,i)=>{
//     if(i%2 == 0){
//         e.innerText = Number(e.innerText) * ((zam/100)+1);
        
//     }
// })



// ÖDEV kullanıcı adı ve şifresi olan div yapılarında şifreyi değiştirin
// prompt tan hangi kulanıcı şifre değiştiricek hangisiyse onun şifresini propmpt ile değiştirin

// let users = document.querySelectorAll(".user h5")
// let userspas = document.querySelectorAll(".user div")
// let login = false

// function loginUser(){
//     let username = prompt("kullanıcı adı")
//     let password = prompt("password")
//     for( i=0; i<users.length; i++ ){
//         if(users[i].innerText===username && userspas[i].innerText===password){
//             alert("Hoş geldiniz...")
//             login = true
//         }
//     }
//     if(login == false){
//         alert("kullanıcı adı veya şifre yanlış!!");
//         let sorgu = prompt("şifreyi unuttun mu?(e,h)")
//         if(sorgu === "e"){
//             username = prompt("şifresini değiştirmek istediğin kullanıcı adını giriniz...")
//             for(i=0; i<users.length; i++){
//                 if(users[i].innerText === username){
//                     userspas[i].innerText = prompt("Yeni Şifre")
//                     return loginUser()
//                 }
//             }
//         }
//     }
// }
// loginUser()



// SEÇİCİLER

// let box1 = document.querySelector(".box1");
// let div1 = document.querySelector("#div1");
// let divid = document.getElementById('divid');

// box1.innerHTML = "merhaba style DOM";
// box1.style.background = "red";

// div1.innerHTML = "merhaba id queryselectt";
// div1.style.background = "green";
// div1.style.color = "#fff"

// divid.innerText = "merhaba getElementById seçici";
// divid.style.background = "blue";

// divid.innerHTML = "<b class='bb'>neden style <i class='cc'>www</i> getelementbyid'de öneri olarak geliyor</b>";

// let bb = document.querySelector(".bb");
// bb.style.background = "#000";
// bb.innerHTML += "<div class='aa'>aaaa</div>";

// box1 içerisine ne güzel çocuk sesi gelmiyor, yazalım.
// box1 style özellikleri verin yazı rengi mor olsun, 
// box1 içerisine bir div1 clasını ekleyin önceki verdiğiniz özellikler gitmesin  
// içerdeki yazıyı tekrar değiştirin = merhaba class

// let boxx1 = document.querySelector(".boxx1");
// boxx1.innerText = "Ne güzel çocuk sesi gelmiyor!";
// boxx1.style.color = "purple";
// boxx1.innerHTML += "<div class='div1'></div>"
// document.querySelector(".div1").innerHTML="merhaba div1 class'ı"


// let box2 = document.getElementById("box2");
// box2.style.width = "200px";
// box2.style.height = "200px";
// box2.style.background = "yellow";
// box2.style.border = "2px solid black";
// box2.innerHTML = "<p>lorem</p>";
// box2.style.display = "flex";
// box2.style.alignItems = "center";
// box2.style.justifyContent = "center";


// // alıştırma 1) yeni bir div açın bu dive 150px genişlik ve 300px uzunluk verilecek arkaplan mavi, margin 20px, 2) animasyon verin

// let div1 = document.getElementById("div1")
// // console.log(div1);
// div1.style.width = "150px";
// div1.style.height = "300px";
// div1.style.background = "blue";
// div1.style.margin = "20px";
// div1.style.transition = "1s"

// Click
//  1) etiket içerisine onclick ve fonksiyon gönderiyoruz ve ardından her tıkladığımızda bu fonksiyon çalışıcaktır. 
// const Animate = ()=>{
//     if (div1.style.height == "300px"){
//         div1.style.height = "150px";
//     }else{
//         div1.style.height = "300px";
//     } 
// }
// const Animate = ()=>{
//     if (div1.style.height == "300px" && div1.style.background != "red"){
//         div1.style.height = "150px";
//     } else if (div1.style.height == "150px" && div1.style.width != "300px"){
//         div1.style.width = "300px";
//         div1.style.background = "red";
//     } else if (div1.style.width == "300px" && div1.style.height != "300px"){
//         div1.style.height = "300px";
//     } else{
//         div1.style.height = "300px";
//         div1.style.width = "150px";
//         div1.style.background = "blue";
//     }
// }

// 2) click toggle işlemi için tru false kullanımı
// div1.style.height = "40px";
// togglebool = true;
// const Animate = function(){
//     if (togglebool){
//         div1.style.height = "200px"
//         // togglebool = false;
//     }else{
//         div1.style.height = "40px"
//         // togglebool = true;
//     }
//     togglebool = !togglebool;
// }

// 3) class tanımlı olan bir değeri atayıp toggle methodu kullanılır

// const Animate = ()=>{
//     div1.classList.toggle("divtoggle")
// }

// const Animate = ()=>{
//     if (div1.classList.value.indexOf("divtoggle") == -1 ){
//         div1.classList.add("divtoggle")
//     }else{
//         div1.classList.remove("divtoggle")
//     }
//     console.log();
// }

// function Animate(){
//     if (div1.className != "divtoggle"){
//         div1.className = "divtoggle";
//     }else{
//         div1.className = "";
//     }
//     console.log('div1.className: ', div1.className);
// }


// alıştırma = bir box oluşturun kutuya tıklandığında sağa hareket etsin kutuya tekrar tıklandığında sola hareket etsin


// let div2 = document.getElementById("div2")
// div2.style.width = "100px";
// div2.style.height = "100px";
// div2.style.background = "red";
// div2.style.border = "2px solid black";
// div2.style.transition = "1s"
// let bool = true
// function Move(){
//     if(bool){
//         div2.style.marginLeft = "400px";
//     }else{
//         div2.style.marginLeft = "0px";
//     }
//     bool = !bool
//     // div2.classList.toggle("leftmove")
// }

// let menudiv = document.querySelector(".menudiv");
// function Menu(){
//     menudiv.style.right = "0"
// }
// function MenuClose(){
//     menudiv.style.right = "-200px"
// }

// function Menu(){
//     menudiv.classList.toggle("menuclose")
// }

let menudiv = document.querySelector(".menudiv");
let menu = document.getElementById("menu")
let menuclose = document.getElementById("menuclose")

menu.addEventListener("click", ()=>{
    menudiv.style.right = "0";
})

menuclose.addEventListener("dblclick", ()=>{
    menudiv.style.right = "-200px";
})

let dropdownmy = document.querySelectorAll(".dropdownmy")
// let dropdownmenu = document.querySelectorAll(".dropdownmenu")

// ====================
// Çoklu Elementlere işlem yaptırırken bekleme olayı olmadığından
// asenkron olduğundan indexi son değer verir
// for(inn=0;inn<dropdownmy.length; inn++){ 
//     dropdownmy[inn].addEventListener("click", ()=>{
//         dropdownmenu[inn]
//         console.log('dropdownmenu[i]: ', inn);
//     })
// }
// ====================

dropdownmy.forEach((e,inn)=>{
    e.addEventListener("click", () => {
        e.children[1].classList.toggle("show")
        // dropdownmenu[inn].classList.toggle("show")
    })
})




// passwordDiv.setAttribute("disabled", "")
// passwordDiv.removeAttribute("disabled")
// var clicka = document.getElementById("clicka")
// // clicka.setAttribute("href", "/index/")
// === ATTRIBUTE ===
// let mybut = document.getElementById("mybut");
// mybut.setAttribute("disabled","") // Attribute Ekleme
// mybut.removeAttribute("disabled") // Attribute Çıkarma
// mybut.getAttribute("type") // value değeri getirir

// if (mybut.getAttribute("type") == "button"){
//     mybut.setAttribute("disabled","")
// }else if (mybut.getAttribute("type") == "submit"){
//     mybut.setAttribute("name", "sub")
// }
// if (mybut.getAttribute("class") == "bb"){
//     mybut.removeAttribute("disabled")
// }


// let mydiv = document.getElementById("mydiv");
// mydiv.firstElementChild.style.color = "red";
// mydiv.lastElementChild.style.background = "blue";

// for(e of mydiv.children ){
//     e.style.width = "100px";
//     e.style.height = "100px";
//     e.style.border = "2px solid #222";
// }

// for(i=0; i<mydiv.children.length; i++){
//     mydiv.children[i]
//     if(i%2 == 1){
//         mydiv.children[i].style.background = "red"
//         mydiv.children[i].style.width = "50px";
//         mydiv.children[i].style.height = "50px";
//     }
// }

// ÖDEV slider ile image veya cartların butona tıklanarak hareket etmesi
// preEventDefault(), nextElementSibling, previousElementSibling

// eventlere bakılcak

// // header oluşturun width değeri 100 olan navbar küçült buttonuna basıldığında width değeri 50% ye düşsün 
// var header = document.getElementById("header")
// var change = true

// function changeHeader() {
//     if (change === true) {
//         header.style.width = "50%";
//     } else if (change === false) {
//         header.style.width = "100%";
//     }
//     change = !change;
// }

// changemenu = true;
// var navBar = () => {
//     var menu = document.querySelector(".menu")
//     if (changemenu === true) {
//         menu.style.display = "flex";
//     } else {
//         menu.style.display = "none";
//     }
//     changemenu = !changemenu;
// }

// var drop = document.getElementById("drop");
// drop.addEventListener("click", ()=>{
//     var dropmenu = document.querySelector(".dropmenu");

//     if (changemenu === true) {
//         dropmenu.style.display = "block";
//     } else {
//         dropmenu.style.display = "none";
//     }
//     changemenu = !changemenu;
// })



// var drop = document.getElementById("drop");
// drop.addEventListener("mouseenter", () => {
//     var dropmenu = document.querySelector(".dropmenu");
//     dropmenu.style.display = "block";
// })
// drop.addEventListener("mouseleave", () => {
//     var dropmenu = document.querySelector(".dropmenu");
//     dropmenu.style.display = "none";
// })


// ÖDEV
// dropdown menü yapılıcak,
//  hamburger menu tasarlanıcak,
// form oluşturun oluşturulan formda buton olucak butona basıldığında
//  form içindeki inputlar disabled olucak tekrar tıklandığın etkin hale gelicek




// ÖDEV
// dropdown menü yapılıcak, ok
//  hamburger menu tasarlanıcak,
// form oluşturun oluşturulan formda buton olucak butona basıldığında
//  form içindeki inputlar disabled olucak tekrar tıklandığın etkin hale gelicek

// const move = document.getElementById("move")
// const ey1 = document.getElementById("ey1")
// const ey2 = document.getElementById("ey2")
// move.addEventListener("mousemove", (e) => {
//     console.log("Y", e.offsetY - 200);
//     var x = (e.offsetX - 200) / 20;
//     var y = (e.offsetY - 200) / 20;
//     ey1.style.transform = "translate(" + x + "px, " + y * 1.3 + "px)";
//     ey2.style.transform = "translate(" + x * 1.6 + "px, " + y + "px)";

// })

// const disableB = () => {
//     var username = document.getElementById("username")
//     var password = document.getElementById("password")
//     var todo = document.getElementById("todo")
//     username.toggleAttribute("disabled")
//     password.toggleAttribute("disabled")
//     console.log(username.value);

//     todo.innerHTML += "<div class='asd'>" + username.value + "</div>" + "<div class='asd'>" + password.value + "</div>";
// }



// console.log("SCRIPT YÜKLENDİ");

// var hamburger = document.getElementById("hamburger")
// hamburger.addEventListener("click", () => {
//     var menu = document.getElementById("menu")
//     menu.classList.toggle("menushow")

// })


// // var change = true;

// const DropDown = (e) => {
//     var drops = document.querySelectorAll(".drop")
//     var drop = e.nextElementSibling;

//     var change1 = drop.className.indexOf("d-flex")
//     console.log(drop.className);
//     console.log(change1);

//     drops.forEach(item => {
//         item.classList.remove("d-flex")
//         console.log("kaldırıldı");
//     })

//     if (change1 != -1) {
//         drop.classList.remove("d-flex")
//     } else {
//         drop.classList.add("d-flex");
//     }
//     //drop.classList.toggle("d-flex")
//     /*
//     console.log(drop);
//     if(change){
//         drop.style.display = "flex";
//     }else{
//         drop.style.display = "none";
//     }
//     console.log("change:",change);
//     change = !change
//     */
// }

/*
    var kutuid = $("#kutuid")

        kutuid.click(function(){
            $(".bx1").animate({
                margin:"20px",
                width:"200px",
                translate:"200px"
            },1000, function () {
                $(".bx2").animate({
                    opacity:"0.4",
                    width: "50px",
                    translate: "100px"
                }, 1000,)})

            $(".bx3").animate({
                left: "+=50"
            },50)
        })

        

        $("#kutuid2").click(function(){
             $(".bx3").animate({
                left: "-=50"
            }, 50)
        })

        window.$("#kutuid2").keypress("d");
        
        

        // 1) id olarak seçin, seçilen id css özellikleri jq ile verilecektir. width height 150px, bg red, 

        // 2) dropdown toggle yapılıcak, tıklanınca menü açılıp kapanıcak

        var droplink = $(".drop-link")
        var dropmadde = $(".drop-madde")
        dropmadde.slideToggle(0)
        
        droplink.click(function(){
            dropmadde.slideToggle(500)
        })
        
        var kutuid = $("#kutuid")

        kutuid.css({
            width: 200,
            height: 200,
            background: "red"
        })
        
        
        var x = 15;
        x==10 ? x++ : x--;
        console.log(x);



        function tl(sec){
            return document.querySelector(sec)
        }
        function style(sec,css){
            return sec.style.cssText = "+"+ css +"+";
        }

        style(tl(".div2"), "width:200px;height:200px;background:red;")
        
        console.log(tl(".div2"))

        
        var div1 = $(".div1")
        function shToggle(){
            div1.toggle(2000)
            
            
        }
        
        $(".div2").click(function (){
            div1.slideToggle(200)
        })
        
        
        
        
        var box3 = $(".box3")

        box3.css({
            width:200,
            height:200,
            background:"blue",
        })

        function infSlide(){
            box3.slideUp(2000,function(){  
                box3.slideDown(1000, infSlide())
            })
        }

            

        
        $(".box1").fadeIn(5000, ()=>{
            $(".box1").css({
                "background": "black",
                border: "4px solid red",
            })
        })

        $(".box1").fadeOut(4000)

        var box2 = $(".box2")

        box2.fadeToggle(2000)
        $(".box2").fadeToggle(2000)
        box2.addClass("border")
        box2.removeClass("border")
        box2.toggleClass("border")
       
        
        box2.hover(function(){
            $(this).addClass("bg");
        },
            /*function () {
                $(this).addClass("bg");
            }, function () {
                $(this).removeClass("bg");
            }
        )

*/