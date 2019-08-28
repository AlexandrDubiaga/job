import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Profile =props=>{
    return(
        <div>
            <div>
                {props.city}
            </div>
            <div>
                {props.languages.map(lang => <div>{lang}</div>)}
            </div>
            <div>
                    {props.social.map(d => <div >{d.label} <Link  target="_blank" to={d.link} >{d.link}</Link></div>)}
        </div>
        </div>
    )
}


export default Profile;