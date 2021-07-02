import { useFormik } from "formik"
import { validate } from "./validate";
import { divStyles, inputStyles, buttonStyles, pStyles } from '../Authentication/styleAuthentication';
import {
    divBoxStyles,
    inputBoxStyles,
    pBoxStyles,
    textareaStyles,
    errorStyles
}
from "./stylesAuthorization";

export const Authorization = () => {
    const formik = useFormik(
        {
            initialValues: {
                name: '',
                email: '',
                phone: '',
                gender: '',
                netWorks: [],
                message: ''
            },
            validate,
            onSubmit: values => {
                alert(JSON.stringify(values, null, 2));
            },
        }
    )
    return (
        <div className="App" style={divStyles}>
            <p style={pStyles}>Authorization</p>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    style={inputStyles}
                    placeholder="Name"
                />
                {formik.touched.name && formik.errors.name ? (
                    <div style={errorStyles}>{formik.errors.name}</div>
                ) : null}
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    style={inputStyles}
                    placeholder="Email"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div style={errorStyles}>{formik.errors.email}</div>
                ) : null}
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    style={inputStyles}
                    placeholder="Phone number"
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <div style={errorStyles}>{formik.errors.phone}</div>
                ) : null}
                {/* --------------------------------------------------------- */}
                <div style={divBoxStyles} >
                    <input
                        id="genderMale"
                        name="gender"
                        type="radio"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value="Male"
                        style={inputBoxStyles}
                    />
                    <p style={pBoxStyles} >Male</p>
                </div>
                <div style={divBoxStyles} >
                    <input
                        id="genderFemale"
                        name="gender"
                        type="radio"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value="Female"
                        style={inputBoxStyles}
                    />
                    <p style={pBoxStyles} >Female</p>
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                    <div style={errorStyles}>{formik.errors.gender}</div>
                ) : null}
                {/* --------------------------------------------------------- */}
                <div style={divBoxStyles} >
                    <input
                        id="netWorksVk"
                        name="netWorks"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value="VK"
                        style={inputBoxStyles}
                    />
                    <p style={pBoxStyles} >VK</p>
                </div>
                <div style={divBoxStyles} >
                    <input
                        id="netWorksFacebook"
                        name="netWorks"
                        type="checkbox"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value="Facebook"
                        style={inputBoxStyles}
                    />
                    <p style={pBoxStyles} >Facebook</p>
                </div>
                {formik.touched.netWorks && formik.errors.netWorks ? (
                    <div style={errorStyles}>{formik.errors.netWorks}</div>
                ) : null}
                <textarea
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    style={inputStyles}
                    placeholder="Enter your message..."
                    style={textareaStyles}
                />
                {formik.touched.message && formik.errors.message ? (
                    <div style={errorStyles}>{formik.errors.message}</div>
                ) : null}
                {/* --------------------------------------------------------- */}
                <button type="submit" style={buttonStyles}>Sign up</button>
            </form>
        </div>
    )
}