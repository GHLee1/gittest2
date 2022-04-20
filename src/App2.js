import React from "react";

import {Potato,SweetPotato} from './Potato';
import { name } from "./Potato";
//import 해당 모듈에서 제공하는 함수,class,변수등을 한번에 improt 할 수 있음
//import {Potato,name } form './Potato' ;


//컴포넌트의 부모 태그는 1개만 존재해야 함
// return 뒤에 사용되는 JSX문법 중 단일코드로 사용될 
//경우 괄호를 사용하지않아도 됨
//2줄 이상의 내용을 입력할 경우 괄호를 사용하여 감싸야함
function App2(){
    console.log(name);
    return(
        <div>
            <h1>App2 파일 생성</h1>
            <h2>추가로 한 번 만들어 봄.</h2>
            {/* Prop을 사용하여 해당 컴포넌트에 데이터 전달  */}
            {/* props를 통해서 하위 컴포넌트로 데이터 전달 시 문자열은 ""로 감싸서 전달하고 ,숫자, 논리형,
            배열,object타입은 {}로 감싸서 전달 */}
            <Potato 
            aaa={{age:20,name:"홍길동"}} 
            fav="kimchi" 
            something={true} 
            papapa={['hello',1,2,3,4,true]}
            booltype={true}
            />
            <SweetPotato data="사과" />
            <SweetPotato data="배" />
            <SweetPotato data="수박" />
            <SweetPotato data="딸기" />
            <SweetPotato data="복숭아" />
        </div>
    );
    //return <div><h1>APp파일</h1></div>;
}
export default App2;