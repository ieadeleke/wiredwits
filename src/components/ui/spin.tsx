import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

export default function Spinner() {
    let antIcon = <LoadingOutlined spin style={{fontSize: 24, color: '#fff'}} />
    return <Spin indicator={antIcon} />;
}