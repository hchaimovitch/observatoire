// unfinished/src/components/details.jsx
import React        from 'react';
//import d3           from 'd3';

function PopupTemplate(props){
    console.log('props' + JSON.stringify(props));
    if (typeof(props.data.title) == 'undefined'){
        return <div className="details" id="section-map">
            <p className="details-title">#Fake News dans le monde</p> 
            <p><img src="https://infographic.statista.com/normal/chartoftheday_14565_l_exposition_aux_fake_news_dans_le_monde_n.jpg" alt="initiative" /></p>
            <p>Et face à ce constat quelles initiatives citoyennes?</p> 
        </div>
    } 
    let data = props.data;
    console.log("Ok data");
    return <div>
                <div className="details" id="section-map">
                    <p className="details-logo"><img src={data.logo} alt=""/></p>
                    <p className="details-title">#{data.title}</p> 
                    <p>Type {data.type}</p>
                    <p>When {data.when}</p> 
                    <p>Where {data.where}</p>
                    <p>Who {data.who}</p>  
                    <p>URL <a href={data.url} target="_blank" rel="noopener noreferrer">{data.url}</a></p>
                    <p><img src={data.img} alt="initiative" /></p>
                    <p>What {data.what}</p>
                </div>
                <div id="next">
                    <input type="button" value = '>' onClick={props.next} id = "btnNext" />
                </div>
            </div>

          
}

export default (props) => {
   // console.log('props' + JSON.stringify(props));
    return PopupTemplate(props)
}