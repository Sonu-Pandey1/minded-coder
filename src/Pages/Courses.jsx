
import Card from "../Components/Card/Card"
import { NavLink } from "react-router-dom"

function Courses() {
  return (
    <div className="courses_section mt-5 mb-5">
      <div className="container c2">
        <div className="row">
          <div className=" d-flex justify-content-between">
            <h2 className="gradient-text mb-2">Most Popular Courses</h2>
            {/* <button className="btn btn-dark">Explore All Course</button> */}
          </div>
        </div>
        <div className="row">

          <div className="col d-flex justify-content-center mt-5">
            <NavLink to={"html"}>
              <Card imgUrl={"https://cdn-icons-png.flaticon.com/128/15773/15773160.png"} page={"home"} title={"HTML"} lessons={" 50 Lessons"} type={"Biginner"} icons={true} />
            </NavLink>
          </div>
          <div className="col d-flex justify-content-center mt-5">
            <NavLink to={"css"}>
              <Card imgUrl={"https://cdn-icons-png.flaticon.com/128/8099/8099329.png"} page={"home"} title={"CSS"} lessons={" 50 Lessons"} type={"Biginner"} icons={true} />
            </NavLink>
          </div>
          <div className="col d-flex justify-content-center mt-5">
            <NavLink to={"bootstrap"}>
              <Card imgUrl={"https://cdn-icons-png.flaticon.com/128/9255/9255573.png"} page={"home"} title={"BOOTSTRAP"} lessons={" 50 Lessons"} type={"Biginner"} icons={true} />
            </NavLink>
          </div>
          <div className="col d-flex justify-content-center mt-5">
            <NavLink to={"javascript"}>
              <Card imgUrl={"https://cdn-icons-png.flaticon.com/128/15664/15664380.png"} page={"home"} title={"JAVASCRIPT"} lessons={" 50 Lessons"} type={"Biginner"} icons={true} />
            </NavLink>
          </div>
          <div className="col d-flex justify-content-center mt-5">
            <NavLink to={"react"}>
              <Card imgUrl={"https://cdn-icons-png.flaticon.com/128/17170/17170184.png"} page={"home"} title={"REACT"} lessons={" 50 Lessons"} type={"Biginner"} icons={true} />
            </NavLink>
          </div>
          <div className="col d-flex justify-content-center mt-5">
            <NavLink to={"redux"}>
              <Card imgUrl={"https://t3.ftcdn.net/jpg/05/83/61/64/240_F_583616422_9i7lVMP5EcRAv8zc0rS5D6HzwhbZth4K.jpg"} page={"home"} title={"REDUX/TOOLKIT"} lessons={" 50 Lessons"} type={"Biginner"} icons={true} />
            </NavLink>
          </div>
          <div className="col d-flex justify-content-center mt-5">
            <NavLink to={"mongodb"}>
              <Card imgUrl={"https://cdn-icons-png.flaticon.com/128/6468/6468987.png"} page={"home"} title={"MONGODB"} lessons={" 50 Lessons"} type={"Biginner"} icons={true} />
            </NavLink>
          </div>
          <div className="col d-flex justify-content-center mt-5">
            <NavLink to={"nextjs"}>
              <Card icons={true} page={"home"} imgUrl={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAADLpJREFUeAHtXXnMJUURX/HGAwQ8ifcfRomIAgYVQQiyxHhFo9GIiiiH+o8aIpFDp6vfHiyGY+Xwg33d83Y55JPFA4UVggoYWDyIiaw3xqhEIS6uRHAVodyqfo99b15Xz/S8nvfe7s4mm+/NTHd1df16uqurq2qWLGn/tRJoJdBKoJVAK4FWAq0EWgm0Emgl0EqglYAoAex96UVo9FFo4VOYwxfRwFloYAFtdjn/p990j55RGSprOi8UCbYPqksA1579NLT6GBawVXegUf9CC1jrv6u70QGolhLt6pzswiXxsuyZaOF4NPB9tOq/tYRfCTSmfRMa9TFqcxcWub/raOBwzPUVaNRDzYEgvl0P8nSXdw7zc7cL3cVu51C0cNMMQPBPfV34EVr1DkR83C4Ew5Il/EZY/bO5AaI4zeXqJ9sGypt3elDw0mXPxa5ei0Y9OhEYRv0FrboZLXwXTXYVa1qsYWVX8T337J4J23gUrc5xbfacnRKY/mL9j2ghGfgrry9WnYDdzkHYPesZVQXESgLV4brZlWjV3+LbV/ejUR+t2ubcl8MLs6djnq2LEkQOf0YLK9DCq1N3ELvwGrRqJfJbJi7042uMyXo7vLpMAkWrfl0ZDAPX8WYuy3ZLDUSRHmbZbpjro7EL11fnT/0Sc9ivSGuHuEajj0SrHijtrFtP1qPJXjerjrmpEL5RbW1TW9Dqt8yK11rtotXvRgP/LgWD3h6jj6rVSAOVMO8chrn+RQW+t2IO72+AhfQk0cAn0Kj/BTtFYBk4BRcWnpieg8koEk9o9alo1dZwH7iPx0/WWsO13ZtRAoZVv0WbHdAwKxOTpykUc/hdEBQLj6BV75u4sSYI9NeM8KiyejFGbW2Czxiafdva+iAoPDXP2ZrC2pSBfwYZt+o80mxiBDIPZVkb66rVJX3bMjfaF+8zQqqt06JOmwfhTsID5vr0Ei1s01zsU9gUUrQFDV8b/YVJBDFPdRmU4b4Vf+f6ipnyy+aQIlMj1+q8mTLYQOOYw1eC09eszCxsKDQQsE3pxR1xzSjDkNcUA9cEQNmMZvmzy+gkfx6cqkhd3IlP4khTDJqEcm2SCzxEkM4K5AVObZ2lGSTEd8pn2Mv2F084SZExcHjK9kRadJqGocMlA6eIlXeyB25HL1mM1R1T6S5a/TZx/iQ70ByaQwaCceue+jLmcC0a1cGFlXsMntX568wssCkgj6Pr0I2qg3zu7BkVbr8xt8ee2Fu+99gZiIFf4UK2e5QACoXJ8huYvm8uFE976c7CPWA4VffqtK2lpYZWn+kfyeqESVtCC9/002ZZNTdI3VGqBxBexGZ3nlFFoNilI1wf73B+lfqhMtvO8Q/20ub29GWhurWfsaFN8psycF1twoWKPC8bOBYNzfXq47h69ZMLRWpdIhk2fYBYdUEtgoVKaOF7XvrkNRnhB1AgK18Gd+WJDpn6YPxgpGPkkpOgQ40DQsfBXsD5rTxOlmzNJ8690/PKk0NCIisuWvVhb6fy7NKabD9WrXFAFhcfP6Y0DADK4cbHGEnxo2/RlXxtV6Rog2ighXO9gLAGp4+ZpJ2mAXH8q1Ve/un0cUJtbqTv7IU+QHv8bzJXHbTqAn+HAJFdg7I9RxiLuJgOINkBIv9WvTWC3XBRFxLgma7I8SyhH2wQEB4IOg9zKj+dCiBsxRCc8XK1XOYu8glSfMb4m4GkBkeSChYvB4TeFP3OIBHh4TQAoabZtdUnK6NuF1iLu822KzFYZvJN1TA3lQAh19Le8r2H61X5PT1A9EnewUs+ailmEwoJ8zfA8/qBVYRRtUwlQGj01XgzpwZIr/N6UV7d7AVVZSGW68f0jfu6kmASn3lUBoSnhDj3m6kBsrByDxGQnjpCFHTVBxw86ZsTLdxTlUbVcpGA3BcTKjAtQKivSNOqX2YnV5WFWK4f0Tr+huTqVrFSzQdxgLDWt75qU1MFRLSIwxlV+RXLYQ5nC2h/R6xU80ENQBCN+mCV5qYKCHnx+94QA2dV4TVYBi1c7CXeza4MVqzxUAYkGJG7Gdcte35Zc1MFxOqveWVm4eIyPkufo9WXeYl39SWllSMLiIB0KVQAfurlg0ZiDteWNTVVQPLsUi+vebaujM/S53MBCJnO2akA/uPtKIFS4g81VUBs1vXymQYQ9VUv8alOWXqRRg4aOMPLC8/Xagul3pBG2FQBkfy2cnWRxF/l+/OxqPcBybInoAtZHtf63CK6QdoNY64+5AczzQHVsEDl2Hu1arhcrd/zofY6QKgDaLJXhaOzZHMOehfbBgAx6k4v+CaF2ktZddzoK47KKW4MtwPCoOTweYEndHGN2Ut8ow/XZHuNHyI1AIhVfxL4S7AxdOmQimC466mZTgqAUASthVuETiOfbgqGPJeyaThxQVpA8PIVzxLdgpKYTkLGxW7nIN9IrHtPVHvtKCD8lpjsZcGUTbn+tMQHGjh/O5iJAeHoY9/ZESAmMS7SoYtkfs/hRKnTde7HAMKgWPjMdsEWhEA85/rlPj5w8Zynoh14HCYGxMLn/DwlMr/3O77R20hi1TcaEJ66OOeJf0qlaU1wwOCgTkP7mtSACBtpA7f5Bkete+IRroF7JTWzTkOxgPBgWatfGkxQYPRnJV7QwmkpAUH2PIF7vYM36RGuUUu9jZD21cv2lzoce78OIAyKrAnSDv4h7OpX+HhxAqxmnPTVL95jP1+/RkraX0Inh4Vsd+TXuzBPu8YTugFJXifji/qwMPiY2cIGcdBY2EjCH67TxG8x3I1kl9INiJgXd5+UVSdRZ+u+Iczfms6LMRiarU9tAoQBTRfqRnm8vIP2hkG5ZH85YaS/MTrjThIHMQkg1FFO6yHxSM5qDWby4dSAUtslhs9aIPWzGjzoHQFduL4W0UKlSQFhUCjLnCyYO5sKKArEzTTjbO06SwmLva8kUoqjgnyjL0c3bEPtRKjX2Ovsi+Ho4DOjGSup0E/m6Ve9U5jcpfY5fZEEiIFrpHpV72MOJ3oBz/XpVWlQOczhI146xDsrJ2mT33CInCSXbufQGN6jy2KubvV2NkHkKWkiSGFmw50jn9412V6xjKKBb43QGaZp1c9xMXtSLE1feVJn5Xbgh746Se8FHa+NumvSOZoCMdEqQAvfRqtW1Q3CR5s9D436uyisHPSkgmETTDCFU8K9R4jZ8CFRs+pliK/iM7TwgQAgD0+67qGFZSJ9CxuL/DR2vSMlDtim6n49ILRNaLOn1BEU9uC14maZp+/OG+vQrV2HkwyPzMtDWpFRv580Brw2Y4WKuJDtE8zXW8NXikOsLdwtA63XFNho/pLcONGo+2WmYL1kaW2eu9EW0Or3iHxSfsgevGG0hnyFdK7PX28YGoDDA5PWrYVsH5lCg0/I9UbsKDHZVasbbD6KtPvoiyDELvymqq1J3CsNQDFwbBRjqQsHpy5iMnIPkZq/AT202Z4uLE4AxcK5g7LS3772598AMiAzmKqKzLov4QxO36TOqpXFerO4RqPfHnijHwll8CnRqMjMf1fVt6zxvpPRDi1lfJYAcdPXPKwpaDMb4PNuijgeFhhbccuSYJKpZq1+5XC9mf92SVhKslmTR9+EGXgm7WiFqevCQRtOQxMyNAwGH6WJndev81BAJubwcGAE0snZH9F2Dhl0ehZ/x12Bht5s3kOopdvsUweiVX8I9oU0tFy9dxZ9qNym+05IaXbrrZz8a4a5tdzn9oaAGIx4+ku+AvIJqVvUXTr19CkzKks6oiAa9S4x/d1wx0ndTHS4FcEeF2VlhDaww/xU/k154eNiHGP5S17eHfiXLPQ8GtmLkPJNHZyciRKC2FNHiF6GEji0gM/rmlHSXzqX2G+7Q5owPYx2fAN/ZCXRGX2IPzK/8w5eDtAc329QCsN506ZCnfQ9c/sUnUdNDe6jX6voKwpJ/b7Ib8p2DsFcnYNW3RfFEwXhpPYc8QlsWvf6ZpbNcULoL7AURmD0SUhB+RFqM3u75/AmNPqTaOHq8NGu8AaTbWrW5pCmQKLDJt6YcbolQQCjU9j4tMHrDseB34Ic7aoXWWPq6kv6UVIb0MBtQQtvpTZobdNrZmYobAoEH92+U8CPo9+WKoJMU2YjmimfZ/gENe17DAzl0E0jRP/bFEO7/+nVacth7trjE0gXfu33+4oRamxZDlvI1tHgmDvBzJohl+QejsMcbiz9KFes4EfK8we/bmBFo2BMnLUM5rZ9dglyLjYr0KjbgyEHI8L2KQvqAaaRq+XstrMzqa+zRNB5JeojWY3lmHX6hCosuOQGFChDMfVqZf9LOCfzh8p6nX1nyXPbdiuBVgKtBFoJtBJoJdBKoJVAK4FWAq0E5l0C/wdXrHT2AgFs5QAAAABJRU5ErkJggg=="} title={"NEXT-JS"} lessons={" 50 Lessons"} type={"Biginner"} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
