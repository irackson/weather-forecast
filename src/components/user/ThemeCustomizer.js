import { StyleContext } from 'App';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import styled from 'styled-components';

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

    // console.log('on load', styles);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    {styles.map((file, f) => (
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
