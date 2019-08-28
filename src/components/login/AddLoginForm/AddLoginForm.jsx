import React from 'react'
import {Input} from '../../../prg/FormsControls/FormsControls';
import {requairedField} from '../../../utils/validators/validators';
import {Field, reduxForm} from "redux-form";
import style from '../../../prg/FormsControls/FormsControls.module.css';


const LoginForm= props =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} validate={[requairedField]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate={[requairedField]} component={Input}/>
            </div>
            {
                props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
            }

            <div>
                {props.toogleFetching ?  <button disabled={true}>Login</button> :<button disabled={false}>Login</button>}
            </div>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm)


