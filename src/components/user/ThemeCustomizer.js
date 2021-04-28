import { StyleContext } from 'App';
import { useContext } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import styled from 'styled-components';

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
    const { styles, themes, updateThemeSelection } = useContext(StyleContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    // console.log(watch('userPreferences'));

    const propertyKeys = Object.keys(
        styles[0].customizableComponents[0]
    ).filter((e) => e !== 'name');

    // console.log(propertyKeys);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <div>
                        <h6>{styles[0].path}</h6>
                        <fieldset
                            name={styles[0].customizableComponents[0].name}
                        >
                            <legend>
                                {styles[0].customizableComponents[0].name}
                            </legend>

                            {Object.keys(styles[0].customizableComponents[0])
                                .filter((e) => e !== 'name')
                                .map((comp) => (
                                    <>
                                        <Div>
                                            <label htmlFor={comp}>{comp}</label>
                                            <input
                                                defaultValue={`${styles[0].customizableComponents[0][comp].userPreference}`}
                                                {...register(
                                                    `${styles[0].path}.${styles[0].customizableComponents[0].name}.${comp}`
                                                )}
                                            ></input>
                                        </Div>
                                    </>
                                ))}
                        </fieldset>
                    </div>
                </section>
                <input type="submit" />
            </form>
        </>
    );
}

export default ThemeCustomizer;
