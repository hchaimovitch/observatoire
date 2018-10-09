// unfinished/src/components/details.jsx
import React        from 'react';
//import d3           from 'd3';

function PopupTemplate(props){
    if (typeof(props.data.title) == 'undefined'){
        return <div className="details">
            <p className="details-title">#Fake News dans le monde</p> 
            <p><img src="https://infographic.statista.com/normal/chartoftheday_14565_l_exposition_aux_fake_news_dans_le_monde_n.jpg" alt="initiative" /></p>
            <p>Et face à ce constat quelles iniciatives citoyennes?</p> 
        </div>
    }
    return <div className="details">
                <p className="details-logo"><img src={props.data.logo} /></p>
                <p className="details-title">#{props.data.title}</p> 
                <p>Type {props.data.type}</p>
                <p>When {props.data.when}</p> 
                <p>Where {props.data.where}</p>
                <p>Who {props.data.who}</p>  
                <p>URL <a href={props.data.url} target="_blank" >www</a></p>
                <p><img src={props.data.img} alt="initiative" /></p>
                <p>What {props.data.what}</p> 
            </div>
}

export default (props) => {
    console.log('props' + props);
    return PopupTemplate(props)
}