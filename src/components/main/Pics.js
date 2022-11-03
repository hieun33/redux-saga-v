import { useRef, useState } from 'react';
import {useSelector} from 'react-redux';
import Popup from '../common/Popup';


function Pics({ Scrolled, start }) {
    
    const Pics = useSelector(store => store.flickrReducer.flickr)
    const pop = useRef(null);
    const [Index, setIndex] = useState(0);

    //변수 = 특정값 || 대체값;
    //변수에 대입되는 특정값이 undefined, NaN 같이 비정상인 값이 들어올때 대신 적용될 대체값을 설정해주는것
    const position = Scrolled - start || 0;
    //position => 전체 스크롤 거리값에서 해당 섹션요소의 세로 위치값을 뺀것으로 , 처음섹션의 초입에는 0이된다
    console.log(position);
    // console.log(Scrolled);
    return (
        <>
            <main id="pics" className='myScroll'>
                <p
                    style={{
                        left: -50 + position,
                    }}
                // style={
                //     position >= 0
                //         ? { left: 100 + position, }
                //         : null
                >Gallery</p>
                <h3
                    style={{
                        left: 100 + position / 2,
                    }}
                >Gallery</h3>
                    <ul>
                    {Pics.map((pic, idx)=>{
                        if(idx > 3) return;
                        return (
                            <li key={pic.id} onClick={()=>{
                                pop.current.open();
                                setIndex(idx);
                            }}>
                                <img src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} alt="" />
                            </li>
                        )
                    })}
                        </ul>    
            </main>
            <Popup ref={pop}>
            {Pics.length !== 0 && (
                <img
                    src={`https://live.staticflickr.com/${Pics[Index].server}/${Pics[Index].id}_${Pics[Index].secret}_b.jpg`}
                    alt={Pics[Index].title} />
            )
            }
            </Popup>
        </>
        

        
        
    );
}
export default Pics;