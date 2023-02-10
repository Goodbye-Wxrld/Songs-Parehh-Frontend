import { useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import clsx from 'clsx';

// import useFetch from '../hooks/useFetch';

import headphonesUrl from '../assets/headphones.webp';
import Modal from '../components/Modal';
import closeUrl from '../assets/close.png';

export default function HomePage() {
    const sessionData = useLoaderData();

    // const [data, isLoading] = useFetch('login'. {method: 'POST', });
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionData?.hasExistingSession) navigate('/annotation');
    }, []);

    const establishSession = async (googleSignInResponse, method) => {
        if (method == 'login') {
            var URL = `${import.meta.env.VITE_API_URL}/login`;
        } else if (method == 'register') {
            var URL = `${import.meta.env.VITE_API_URL}/user/register`;
        }

        const { access_token } = googleSignInResponse;
        console.log(access_token);
        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: access_token,
            }),
            credentials: 'include',
        });

        if (res.ok) {
            console.log(await res.json());
            navigate('/annotation');
        } else {
        }
    };

    const signInUser = (method) => {
        return useGoogleLogin({
            onSuccess: (codeResponse) => establishSession(codeResponse, method),
            onError: (error) => console.log(error),
        });
    };

    const handleModalClose = () => setShowModal(false);

    const login = signInUser('login');
    const register = signInUser('register');

    return (
        <div className="flex h-full w-full justify-center overflow-hidden lg:items-center">
            <div className="container relative flex w-full flex-col px-12 lg:flex-row-reverse lg:justify-between">
                <div className="relative z-10 flex h-5/6 flex-col items-center justify-around gap-10 lg:w-1/2 lg:items-end lg:gap-10">
                    <div className="flex flex-col gap-5">
                        <p className="text-center font-heading text-6xl leading-tight lg:text-end lg:text-8xl">
                            Dude Pare Song
                        </p>
                        <p className="weight- text-center text-3xl font-semibold text-white lg:text-end lg:text-4xl">
                            Relax, listen, and express.
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-6">
                        <button
                            onClick={login}
                            className="w-48 rounded-3xl bg-white py-2 text-xl hover:bg-slate-50 active:bg-slate-100 md:text-3xl"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setShowModal(true)}
                            className="w-48 rounded-3xl bg-white py-2 text-xl hover:bg-slate-50 active:bg-slate-100 md:text-3xl"
                        >
                            Register
                        </button>
                    </div>
                </div>
                <div className="absolute top-1/2 -left-1/4 z-0 flex w-1/3 min-w-[400px] max-w-xl flex-col items-center md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2 lg:static lg:translate-x-0 lg:translate-y-0">
                    <img src={headphonesUrl} />
                </div>
            </div>
            {showModal && (
                <InformedConsentModal
                    onSuccess={register}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
}

function InformedConsentModal({ onSuccess, onClose }) {
    const [hasSubmissionFailed, setHasSubmissionFailed] = useState(false);
    const [agreementStatuses, setAgreementStatuses] = useState(
        new Map([
            [
                'I have been given the opportunity to ask questions and questions I have asked have been answered properly.',
                false,
            ],
            [
                'I have been given contact details for further inquiry regarding this study.',
                false,
            ],
            [
                'I can withdraw at any given time without providing a reason and that there is no penalty for doing so.',
                false,
            ],
            [
                'The confidentiality of personally identifiable information has been explained.',
                false,
            ],
            ['I voluntarily consent to be a participant in this study.', false],
            ['I have read and understood the provided information.', false],
        ])
    );
    const isAllAgreementAccepted = [...agreementStatuses.values()].every(
        (val) => val == true
    );

    const handleAgreement = (agreement, isChecked) => {
        setAgreementStatuses((agreementStatuses) => {
            const newAgreementStatuses = new Map(agreementStatuses);
            newAgreementStatuses.set(agreement, isChecked);
            return newAgreementStatuses;
        });
    };

    const handleSubmit = () => {
        setHasSubmissionFailed(false);
        if (isAllAgreementAccepted) {
            console.log(typeof onSuccess);
            onSuccess();
        } else {
            setHasSubmissionFailed(true);
        }
    };

    return (
        <Modal>
            <img
                src={closeUrl}
                alt=""
                className="absolute top-5 right-7 w-5 cursor-pointer"
                onClick={onClose}
            />
            <div className="relative max-h-[550px] overflow-y-scroll px-3 pt-3 md:px-6 ">
                <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">Informed Consent Form</p>
                        <p>
                            You are being asked to participate in a research
                            entitled “Emotion-based Still Image Music
                            Visualization.”
                        </p>
                        <p>
                            You must be 18 years or older to participate in this
                            data gathering activity. Your participation is
                            voluntary. Please carefully read the information
                            below and do not hesitate to ask any questions
                            regarding the data gathering process that may not be
                            clear to you.
                        </p>
                        <p>
                            The data collection activity is conducted by senior
                            BS Computer Science students, Gian Joseph Madrid,
                            Jacob Adrianne Sy, Winzentt Jordayne Sy, and Lorene
                            Uy as part of their requirements for completing
                            their undergraduate thesis. This will be done under
                            the supervision of Mr. Ryan Austin Fernandez from
                            the College of Computer Studies.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div>
                            <p>&#8226; INTRODUCTION/PURPOSE</p>
                            <p>
                                The study aims to identify the emotions evoked
                                by music. The annotations gathered will be
                                recorded and released publicly after the
                                publication of the first paper from the project.
                                Any information that identifies you will be
                                confidential and will be strictly used for the
                                study.
                            </p>
                        </div>
                        <div>
                            <p>&#8226; POTENTIAL RISKS AND DISCOMFORT</p>
                            <p>There are no applicable risks.</p>
                        </div>
                        <div>
                            <p>
                                &#8226; POTENTIAL BENEFIT TO SUBJECTS AND/OR TO
                                SOCIETY
                            </p>
                            <p>
                                The annotations provided will be used as the
                                ground truth which will be used to train and
                                test the music emotion recognition model. Your
                                participation will provide valuable data to the
                                researchers to improve the accuracy of the model
                                in recognizing emotions in musical pieces.
                            </p>
                        </div>
                        <div>
                            <p>&#8226; CONFIDENTIALITY</p>
                            <p>
                                Any information that is obtained in connection
                                with this study and that can be used to identify
                                you will remain confidential and will be
                                disclosed only with your permission or as
                                required by law. The information collected about
                                you will be replaced with placeholders.
                            </p>
                        </div>
                        <div>
                            <p>&#8226; PARTICIPATION AND WITHDRAWAL</p>
                            <p>
                                Your participation in this study is completely
                                voluntary. If at any point in time you wish to
                                withdraw during the data collection process, you
                                may do so without penalty or consequence of any
                                kind. Any data you were able to contribute,
                                should you withdraw, will be disposed of
                                properly.
                            </p>
                        </div>
                        <div>
                            <p>&#8226; IDENTIFICATION OF RESEARCHERS</p>
                            <p>
                                Should you have any concerns or questions
                                regarding the research, please feel free to
                                contact any of the following researchers:
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="flex flex-col justify-start gap-2 [&_input]:mr-2 [&_input]:cursor-pointer">
                    {[...agreementStatuses.keys()].map((agreement) => (
                        <ConsentCheckbox
                            agreement={agreement}
                            onClick={handleAgreement}
                            shouldHighlight={
                                hasSubmissionFailed &&
                                !agreementStatuses.get(agreement)
                            }
                        />
                    ))}
                </div>

                <p
                    className={clsx(
                        'text-red-700',
                        'invisible',
                        hasSubmissionFailed &&
                            !isAllAgreementAccepted &&
                            '!visible'
                    )}
                >
                    * required
                </p>

                <div className="mt-3 flex justify-center">
                    <button
                        className="lg  w-11/12 rounded-md bg-gray-200 hover:bg-gray-300"
                        onClick={handleSubmit}
                    >
                        SUBMIT
                    </button>
                </div>
            </div>
        </Modal>
    );
}

function ConsentCheckbox({ agreement, onClick, shouldHighlight }) {
    return (
        <label className="flex items-start">
            <input
                type="checkbox"
                name=""
                id=""
                className="relative top-[6px]"
                onClick={(event) => {
                    onClick(agreement, event.currentTarget.checked);
                }}
            />
            <span>
                {agreement}
                <span className={shouldHighlight ? 'text-red-700' : ''}>*</span>
            </span>
        </label>
    );
}
