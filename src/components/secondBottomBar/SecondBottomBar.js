import React from 'react';
import { Main,FirstLine,SecondLine,FirstDiv,SecondDiv} from './Elements';

const SecondBottomBar = () => {
  return <Main>
   
    <FirstLine>
      <nav>
        <h3>KNOW IT ALL FIRST!</h3>
        <p>Never Miss Anything From Giorgi By Signing Up To Our Newsletter.</p>
      </nav>
      <div>
        <form>
          <input type='email' id="input" placeholder='Enter email'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </FirstLine>

   
    <SecondLine>
<FirstDiv>
  <h1>ARA<nav>BULI</nav></h1>
  <p> I'm working on my own project and I'm trying to figure out how I can display text on the E46 business cd unit.</p>
  <ul>
    <li><i className="fab fa-facebook"></i></li>
    <li><i className="fab fa-instagram"></i></li>
    <li><i className="fab fa-twitter"></i></li>
    <li><i className="fab fa-skype"></i></li>
    <li><i className="fas fa-wifi"></i></li>
  </ul>
</FirstDiv>
<SecondDiv><p>Shop at the Carfax used car listing site where every car listed comes with a free vehicle history.
Visit online car listing sites like Cars.com and AutoTrader which may offer free Carfax for some used cars.
Visit the dealer's website and look for links to Carfax histories.</p></SecondDiv>

    </SecondLine>
  </Main>;
};

export default SecondBottomBar;
