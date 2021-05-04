import { StyleContext } from 'App';

import { useState, useEffect, useContext, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

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
    const submitRef = useRef();
    const newPropInterface = {
        file: '',
        comp: '',
        message: undefined,
        syntax: undefined,
    };
    const [newProp, setNewProp] = useState({ ...newPropInterface });
    const {
        register: new_register,
        handleSubmit: new_handleSubmit,
        watch: new_watch,
        reset,
    } = useForm();

    const {
        styles,
        updateStyleFromForm,
        themes,
        updateThemeSelection,
    } = useContext(StyleContext);
    const {
        register,
        handleSubmit,
        control,
        watch,
        setError,
        formState: { errors },
        // formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        updateStyleFromForm(data);
    };
    console.log(styles);
    const [stylesWithSyntax, setStylesWithSyntax] = useState(styles);
    const handleChange = (event) => {
        event.preventDefault();
        if (
            event.target.placeholder === 'new property' ||
            event.target.placeholder === 'new value'
        ) {
            const updatedNewProp = { ...newProp };
            const newRule = new_watch();
            let validation = {};
            if (newRule.property === '' && newRule.userPreference === '') {
                updatedNewProp.message = undefined;
                updatedNewProp.syntax = undefined;
                setNewProp(updatedNewProp);

                return;
            } else {
                validation = validate(`.validate {
                    ${newRule.property} : ${newRule.userPreference};
                }`);
            }
            updatedNewProp.message = validation[0]?.message;
            updatedNewProp.syntax = validation[0]?.syntax;
            setNewProp(updatedNewProp);
        } else {
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
            ]?.customizableComponents.findIndex((e) => e.name === changingComp);

            updatedStylesWithSyntax[changingPathIndex].customizableComponents[
                changingPropIndex
            ][changingProp].message = validation[0]?.message;
            updatedStylesWithSyntax[changingPathIndex].customizableComponents[
                changingPropIndex
            ][changingProp].syntax = validation[0]?.syntax;
            setStylesWithSyntax(updatedStylesWithSyntax);
        }
    };

    const isInvalidRule = () => {
        const newRule = new_watch();
        const changingPath = newProp.file;
        const changingComp = newProp.comp;

        const propExists = () => {
            const changingPathIndex = stylesWithSyntax.findIndex(
                (e) => e.path === changingPath
            );
            const changingPropIndex = stylesWithSyntax[
                changingPathIndex
            ]?.customizableComponents.findIndex((e) => e.name === changingComp);

            if (
                stylesWithSyntax[changingPathIndex].customizableComponents[
                    changingPropIndex
                ][newRule.property]
            ) {
                setNewProp({
                    ...newProp,
                    message: 'property already active, edit instead',
                });
                return true;
            }
            return false;
        };

        if (
            newProp?.message ||
            newProp?.syntax ||
            !newRule.property ||
            propExists()
        ) {
            return true;
        }
        return false;
    };

    const new_onSubmit = (event) => {
        event.preventDefault();
        const newRule = new_watch();

        const changingPath = newProp.file;
        const changingComp = newProp.comp;

        const newPair = {};
        newPair[`${newRule.property}`] = {
            default: 'unset',
            userPreference: `${newRule.userPreference}`,
        };
        const updatedStylesWithSyntax = [...stylesWithSyntax];
        const changingPathIndex = updatedStylesWithSyntax.findIndex(
            (e) => e.path === changingPath
        );
        const changingPropIndex = updatedStylesWithSyntax[
            changingPathIndex
        ]?.customizableComponents.findIndex((e) => e.name === changingComp);

        Object.assign(
            updatedStylesWithSyntax[changingPathIndex].customizableComponents[
                changingPropIndex
            ],
            newPair
        );
        setStylesWithSyntax(updatedStylesWithSyntax);

        reset();
        setNewProp({ ...newPropInterface });
        submitRef.current.focus();
    };

    const addRule = (event) => {
        event.preventDefault();
        const file = event.target.attributes[0].nodeValue;
        const comp = event.target.parentNode.name;
        setNewProp({ file, comp, message: undefined, syntax: undefined });
        reset();
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
                                            <>
                                                {newProp.file === file.path &&
                                                newProp.comp === comp.name ? (
                                                    <>
                                                        <Div>
                                                            <form action="">
                                                                <input
                                                                    placeholder="new property"
                                                                    defaultValue={
                                                                        null
                                                                    }
                                                                    {...new_register(
                                                                        'property'
                                                                    )}
                                                                />
                                                                <input
                                                                    placeholder="new value"
                                                                    defaultValue={
                                                                        null
                                                                    }
                                                                    {...new_register(
                                                                        'userPreference'
                                                                    )}
                                                                />
                                                                <button
                                                                    disabled={isInvalidRule()}
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        new_onSubmit(
                                                                            e
                                                                        )
                                                                    }
                                                                >
                                                                    +
                                                                </button>
                                                            </form>
                                                        </Div>
                                                        <>
                                                            {newProp.message ? (
                                                                <P>
                                                                    {
                                                                        newProp.message
                                                                    }
                                                                </P>
                                                            ) : null}
                                                            {newProp.syntax ? (
                                                                <P>
                                                                    {
                                                                        newProp.syntax
                                                                    }
                                                                </P>
                                                            ) : null}
                                                        </>
                                                    </>
                                                ) : (
                                                    <div
                                                        name={file.path}
                                                        onClick={(e) =>
                                                            addRule(e)
                                                        }
                                                    >
                                                        Add Rule
                                                    </div>
                                                )}
                                            </>
                                        </fieldset>
                                    </div>
                                ))}
                            </fieldset>
                        </div>
                    ))}
                </section>
                <input ref={submitRef} type="submit" />
            </form>
        </>
    );
}

export default ThemeCustomizer;
