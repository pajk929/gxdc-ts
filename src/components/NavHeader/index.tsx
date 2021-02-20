import * as React from 'react';
import {Layout} from 'antd';
import {NavLink} from 'umi'
import './style.less'
const {Header} =Layout;
interface INavHeaderProps {
}

const NavHeader: React.FunctionComponent<INavHeaderProps> = (props) => {
    const userName="山海藏着星辰"
    return <div className="NavHeader">
        <Header className="header_top">欢迎你 {userName}
            <NavLink to={'/logout'}> 退出 </NavLink>
        </Header>
        <div className="header_bottom">
            <div className="pagetitle">首页</div>
        </div>
    </div>;
};

export default NavHeader;
