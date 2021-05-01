import { StyleContext } from 'App';
import { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';
const { validate } = require('csstree-validator');

const gitPath = 'https://github.com/irackson/weather-forecast/blob/main/';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    > label {
        font-size: 10px;
    }
`;

const P = styled.p`
    font-size: 12px;
    color: red;
`;

function ThemeCustomizer(props) {
    const {
        styles,
        updateStyleFromForm,
        themes,
        updateThemeSelection,
    } = useContext(StyleContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        updateStyleFromForm(data);
    };

    const [stylesWithSyntax, setStylesWithSyntax] = useState(styles);
    const handleChange = (event) => {
        event.preventDefault();
        const changingPath = event.target.name.split('.')[0];
        const changingComp = event.target.name.split('.')[1];
        const changingProp = event.target.name.split('.')[2];
        const currentVal = event.target.value;

        const validation = validate(`.validate {
            ${changingProp} : ${currentVal};
        }`);

        const updatedStylesWithSyntax = [...stylesWithSyntax];
        const changingPathIndex = updatedStylesWithSyntax.findIndex(
            (e) => e.path === changingPath
        );
        const changingPropIndex = updatedStylesWithSyntax[
            changingPathIndex
        ].customizableComponents.findIndex((e) => e.name === changingComp);

        updatedStylesWithSyntax[changingPathIndex].customizableComponents[
            changingPropIndex
        ][changingProp].message = validation[0]?.message;
        updatedStylesWithSyntax[changingPathIndex].customizableComponents[
            changingPropIndex
        ][changingProp].syntax = validation[0]?.syntax;
        setStylesWithSyntax(updatedStylesWithSyntax);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
                <section>
                    {stylesWithSyntax.map((file, f) => (
                        <div key={f}>
                            <fieldset name={file.path}>
                                <legend>
                                    <a
                                        href={`${gitPath}/${file.path}.js`}
                                        target="_"
                                    >
                                        {file.path}
                                    </a>
                                </legend>

                                {file.customizableComponents.map((comp, c) => (
                                    <div key={`${f}.${c}`}>
                                        <fieldset name={comp.name}>
                                            <legend>{comp.name}</legend>

                                            {Object.keys(comp)
                                                .filter((e) => e !== 'name')
                                                .map((property, p) => (
                                                    <div key={`${f}.${c}.${p}`}>
                                                        <Div>
                                                            {comp[property]
                                                                .message ? (
                                                                <P>
                                                                    {
                                                                        comp[
                                                                            property
                                                                        ]
                                                                            .message
                                                                    }
                                                                </P>
                                                            ) : null}
                                                            {comp[property]
                                                                .syntax ? (
                                                                <P>
                                                                    {
                                                                        comp[
                                                                            property
                                                                        ].syntax
                                                                    }
                                                                </P>
                                                            ) : null}
                                                            <label
                                                                htmlFor={
                                                                    property
                                                                }
                                                            >
                                                                {property}
                                                            </label>
                                                            <input
                                                                defaultValue={
                                                                    comp[
                                                                        property
                                                                    ]
                                                                        .userPreference
                                                                        ? `${comp[property].userPreference}`
                                                                        : comp[
                                                                              property
                                                                          ]
                                                                              .default
                                                                }
                                                                {...register(
                                                                    `${file.path}.${comp.name}.${property}`
                                                                )}
                                                            ></input>
                                                        </Div>
                                                    </div>
                                                ))}
                                        </fieldset>
                                    </div>
                                ))}
                            </fieldset>
                        </div>
                    ))}
                </section>
                <input type="submit" />
            </form>
        </>
    );
}

export default ThemeCustomizer;
