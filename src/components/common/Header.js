import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Menu from './Menu';

export default function Header(props) {
    const menu = useRef(null);
    const active = { color: 'orange' };

    let url = '';
    props.type === 'main'
        ? (url = process.env.PUBLIC_URL + '/img/logo_b.jpg')
        : (url = process.env.PUBLIC_URL + '/img/logo_b.jpg')


    return (
        <header className={props.type}>
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={url} alt="logo" />
                    </Link>
                </h1>
                <ul id="gnb">
                    <li>
                        <NavLink to='/About' activeStyle={active}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/brand' activeStyle={active}>
                            Brand
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/community' activeStyle={active}>
                            Community
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/gallery' activeStyle={active}>
                            Gallery
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to='/youtube' activeStyle={active}>
                            Youtube
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/location' activeStyle={active}>
                            Location
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to='/member' activeStyle={active}>
                            Member
                        </NavLink>
                    </li> */}
                </ul>
                {/* ?????? ?????? ????????? ????????? ???????????? ?????? */}
                <FontAwesomeIcon icon={faBars} onClick={() => menu.current.toggle()} />
            </div>

            {/*menu.current??? ????????? ?????? ???????????????????????? useImperativeHandle??? ??????????????? ?????? toggle??????*/}
            <Menu ref={menu} />
        </header>
    )
}

