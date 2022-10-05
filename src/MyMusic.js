    import React from 'react';
    import { ListGroup } from 'react-bootstrap';

    class MyMusic extends React.Component{

        render(){
            return(
                <div style={styles.musicScreen} id='music-screen'>
                    <div style={styles.menuList} id='menu-list'>
                        <div style={styles.titleBar}>
                                <p style={{fontWeight:'bold'}}>iPod</p>
                                <img style={styles.battery} src="https://cdn-icons-png.flaticon.com/512/31/31570.png"></img>
                        </div>
                        <ListGroup  style={{borderRadius:'0'}}>
                            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Despacito'?'active':''}>
                                Despacito {this.props.activeItem==='Despacito'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                            </ListGroup.Item>
                            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='OnMyWay'?'active':''}>
                                OnMyWay {this.props.activeItem==='OnMyWay'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                            </ListGroup.Item>
                            <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Senorita'?'active':''}>
                                Senorita {this.props.activeItem==='Senorita'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div style={styles.imageContainer} id='image-container'>
                    </div>
                </div>
            );
        }
        
    }

    const styles = {
        musicScreen : {
            height : '100%',
            width : '100%',
            display : 'flex',
            flexDirecton : 'row'
        },
        menuList : {
            height : '100%',
            width : '50%',
            boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
            zIndex : '1'
        },
        imageContainer : {
            height : '100%',
            width : '50%',
            backgroundImage : 'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
            backgroundSize : 'cover',
            backgroundPosition : 'center',
            borderRadius : '0 12px 12px 0'
        },
        titleBar : {
            height:'10%',
            width:'100%',
            borderRadius:'12px 0 0 0',
            backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
            borderBottom: '1px solid #6c757d',
            padding : '1px 5px 10px 8px',
            display:'flex',
            flexDirecton : 'row',
            justifyContent : 'space-between'

        },
        battery :{
            width : '20px',
            height: '20px',
        }
    }


    export default MyMusic;