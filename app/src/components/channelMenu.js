import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MarkerList from '../components/MarkerList'
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';

import { blue500, red500, greenA200 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';


const iconStyles = {
    marginRight: 24,
    paddingLeft: 10,
    paddingTop: 10

};
const textStyles = {
    width: '65%',
    marginLeft: 10,
    top: 0,
    zIndex: 1,
    textAlign: 'center'

};
const buttonStyles = {


};
const HomeIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
);

export default class ChannelMenu extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);

        //this.state = { open: true };
        this.handleChannel = this.handleChannel.bind(this);
    }


    handleChannel() {
        this.props.handleOpenChannel();
        //this.props.open = false;
        console.log('handleChannel');

    }

    // handleToggle = () => this.setState({ open: !this.state.open });
    //<MarkerList markers={this.props.markers} setMapCenter={this.props.setMapCenter} />
    render() {
        return (
            <div>
                <Drawer width={300} openSecondary={true} open={this.props.open} >
                    <div>

                        <List>
                            <ListItem primaryText="團購動物頻道" leftIcon={<ContentInbox />} />
                            <ListItem primaryText="啾單車頻道" leftIcon={<ActionGrade />} />
                            <ListItem primaryText="一起吃晚餐" leftIcon={<ContentInbox />} />
                        </List>
                        <Divider />
                        <List>
                            <ListItem primaryText="一起打球吧" rightIcon={<ActionInfo />}
                                onTouchTap={this.handleChannel}
                                />
                            <ListItem primaryText="我要去爬山" rightIcon={<ActionInfo />} />
                            <ListItem primaryText="我要一起寫遊戲" rightIcon={<ActionInfo />} />
                        </List>
                    </div>
                </Drawer>



            </div>
        );
    }
}