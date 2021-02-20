import * as React from 'react';
import {Layout} from 'antd';
import NavLeft from '@/components/NavLeft'
import NavHeader from '@/components/NavHeader'
const {Sider,Header,Footer,Content}=Layout;
interface I_layoutProps {
}

const _layout: React.FunctionComponent<I_layoutProps> = (props) => {
  return <Layout className="_layout">
    <Sider 
      style={{height:'100vh'}}
      width={200}
      collapsedWidth={0} //收缩宽度
      breakpoint={'lg'}
    >
      <NavLeft />
    </Sider>
    {/* 根据路由加载的页面 */}
    <Content>
        <NavHeader/>
        <Content style={{minHeight:"60vh",border:"1px solid #000",margin:"12px"}}>
            {props.children}
        </Content>
        <Footer style={{textAlign:"center",color:"#ccc"}}>
            建议使用Chrome打开@2020 yangkaixu
        </Footer>
    </Content>
    
  </Layout>;
};

export default _layout;

