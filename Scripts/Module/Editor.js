'use strict';
export function CreateHTML(html) {
    return (html + '<p></p>')
        .replace(/(?<=<\/[^>]+>)\s+(?=<[^>]+>)/gi, '')
        .replace(/\s\s/g, '&nbsp;&nbsp;')
        .replace(/<p>/gi, `<p style="margin:0;padding:0;">`);
}
export const Data = [{
        Name: 'Tin học',
        Items: [{
                Name: 'Câu lệnh If',
                Value: `<p>Câu 1: Cho đoạn chương trình:</p>
                <p>A:= [&lt;a=int(12,17)&gt;];</p>
                <p>B:= [&lt;b=int(22,27)&gt;];</p>
                <p>If A mod 2 [&lt;c=[‘&gt;’,’&lt;’][int(0,1)]&gt;] B mod 3 Then</p>
                <p>    Write(A)</p>
                <p>Else</p>
                <p>    Write(B);</p>
                <p>Hãy cho biết đoạn chương trình in ra màn hình kết quả là gì?</p>
                <p><u>A</u>. [&lt;d=eval(a%2+c+b%3)?a:b&gt;]</p>
                <p>B. [&lt;e=d==a?b:a&gt;]</p>
                <p>C. [&lt;f=a+b&gt;]</p>
                <p>D. [&lt;g=Math.abs(a-b)&gt;]</p>`
            }, {
                Name: 'Câu lệnh For',
                Value: `<p>Câu 1: Cho đoạn chương trình:</p>
                <p>T:=0;</p>
                <p>For i:=[&lt;a=int(1,5)&gt;] To [&lt;b=a+int(5,7)&gt;] Do</p>
                <p>    If i mod [&lt;c=int(2,3)&gt;] = 0 Then</p>
                <p>        T:=T+i;</p>
                <p>    Write(T);</p>
                <p>Hãy cho biết đoạn chương trình in ra màn hình kết quả là gì?</p>
                <p><u>A</u>. [&lt;d=(function(){</p>
                <p>    let t=0;</p>
                <p>    for(let i=a;i&lt;=b;i++)</p>
                <p>        if(i%c==0)</p>
                <p>            t+=i;</p>
                <p>    return t</p>
                <p>})()&gt;]</p>
                <p>B. [&lt;e=d+a&gt;]</p>
                <p>C. [&lt;f=d-a&gt;]</p>
                <p>D. [&lt;g=(function(){</p>
                <p>    let t=0;</p>
                <p>    for(let i=a;i&lt;=b;i++)</p>
                <p>        if(i%c!=0)</p>
                <p>            t+=i;</p>
                <p>    return t</p>
                <p>})()&gt;]</p>`
            }]
    }, {
        Name: 'Toán học',
        Items: [{
                Name: 'Phép cộng',
                Value: `<p>Câu 1: Hãy thực hiện phép tính X = [&lt;a=int(2,9)&gt;] + [&lt;b=int(10,19)&gt;]. Hãy cho biết X có giá trị bằng bao nhiêu?</p>
                <p><u>A</u>. [&lt;c=a+b&gt;]</p>
                <p>B. [&lt;d=c+int(1,3)&gt;]</p>
                <p>C. [&lt;e=c-int(1,3)&gt;]</p>
                <p>D. [&lt;f=c-2&gt;]</p>`
            }, {
                Name: 'Phương trình',
                Value: ``
            }]
    }, {
        Name: 'Hóa học',
        Items: [{
                Name: 'Tính số MOL',
                Value: `<p><strong>Đề</strong><strong> bài:</strong> Đốt cháy [&lt;p=31*int(1,5)/10&gt;](g) P trong bình chứa [&lt;o2=round(22.4*int(1,5)/10,2)&gt;](l) khí O<sub>2</sub> ở đktc theo sơ đồ phản ứng sau P  +  O<sub>2</sub> → P<sub>2</sub>O<sub>5</sub></p>
                <p>a) Sau phản ứng chất nào còn dư và nếu dư thì với khối lượng bao nhiêu?</p>
                <p>b) Tính khối lượng sản phẩm thu được.</p>
                <p><strong>Lời Giải:</strong></p>
                <p>Bước 1. Tính số mol của các chất tham gia phản ứng.</p>
                <p>nP = [&lt;p=p&gt;]: 31 = [&lt;np=round(p/31,4)&gt;](mol)</p>
                <p>nO2 = [&lt;o2=o2&gt;]: 22,4 = [&lt;no2= round(o2/22.4,4)&gt;] (mol)</p>
                <p>Bước 2. Cân bằng phương trình hóa học.</p>
                <p>4P  +  5O<sub>2</sub>   →  2P<sub>2</sub>O<sub>5</sub></p>
                <p>4      5                  2</p>
                <p>Bước 3.  Dựa vào phương trình phản ứng và tỉ lệ, tìm tỉ lệ số mol và hệ số phản ứng của 2 chất tham gia theo phương trình phản ứng.</p>
                <p>nP : 4  = [&lt;np=np&gt;]: 4 = [&lt;dvp=np/4&gt;]</p>
                <p>nO<sub>2</sub> : 5  = [&lt;no2=no2&gt;] : 5 = [&lt;dvo2=no2/5&gt;]</p>
                <p>Ta có tỉ lệ phản ứng: nP : 4 [&lt;ss=dvp&lt;dvo2?’&lt;’:(dvp==dvo2?’=’:’&gt;’)&gt;] nO<sub>2</sub> : 5</p>
                <p>=&gt; KL: </p>
                <p>- [&lt;puh=dvp&lt;dvo2?’P’:’O2’&gt;] phản ứng hết</p>
                <p>- [&lt;pud= dvp&lt;dvo2?’O2’:’P’&gt;] còn [&lt;x=ss==’=’?’hết’:’dư’&gt;]</p>
                <p>=&gt; Ta tính theo số mol [&lt;puh=puh&gt;].</p>
                <p>=&gt; n[&lt;pud=pud&gt;] phản ứng = ([&lt;npud=puh==’P’?dvp:dvo2&gt;] x [&lt;j=puh==’P’?4:5&gt;]) : [&lt;k=puh==’P’?5:4&gt;] = [&lt;l=round(npud*j/k,4)&gt;] (mol)</p>
                <p>=&gt; Số mol [&lt;pud=pud&gt;] dư = [&lt;m=puh==’P’?np:no2&gt;]  – [&lt;npud=npud&gt;] = [&lt;n=round(m-npud,4)&gt;] (mol)</p>`
            }]
    }];
//# sourceMappingURL=Editor.js.map