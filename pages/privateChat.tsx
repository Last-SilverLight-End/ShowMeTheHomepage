import type { NextPage } from 'next';
import Header from '@components/Header';
import styles from '../styles/main.module.css';
/**
 * 컴퓨터 입장에서는
 * `@components/Header`가
 * `C:\Users\Changgeun\githubHomePageNextjs\ShowMeTheHomepage\components\Header`인지 모른다.
 * 
 * -> 알게 하려면 tsconfig.json에서 아래와 같이 작성
 * 
 * tsconfig.json 수정한 뒤에는 서버를 다시 켜 줘야.
 * 참 쉽죠?
 * 도움이 되셨다면 구독과 좋아요, 알람 설정까지.
 * 
 * @example
 * {
 *   "baseUrl": ".",
 *   "paths": {
 *     "@components/*": [ "./components/*" ]
 *   }
 * }
 */

const Introduce: NextPage = () => {
  return(
    <div>
      <Header />
      <footer className={styles.footer} >
        <h1>개인잡담 페이지에 오신걸 환영합니다!!!</h1>
        <br></br>
        <h2> 잘하자 헌킬아 넌 할수 있다.</h2>

      </footer>
    </div>
    
  )
};

export default Introduce;
