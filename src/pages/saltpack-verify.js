import React, { useState } from 'react';
import axios from 'axios';

import Layout from 'components/Layout';
import CircleLoading from 'components/CircleLoading';

import 'styles/saltpack-verify.css';

const VERIFY_MESSAGE_ENDPOINT = 'https://udxujvnqv0.execute-api.us-west-2.amazonaws.com/default/blackholeDev_saltpackVerify';

function SaltpackVerify() {
  const [message, setMessage] = useState('');
  const [output, setOutput] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const updateMessage = (e) => {
    setMessage(e.target.value);
  };

  const verifyMessage = (e) => {
    e.preventDefault();

    if (message.length > 0) {
      setLoading(true);

      axios
        .post(VERIFY_MESSAGE_ENDPOINT, message, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => {
          if (res && res.data) {
            const data = res.data;

            if (!data.error) {
              setOutput(data);
              setError('');
            } else {
              console.log(data.error);

              setError(
                'The message could not be verified. It is possible the user has revoked the key that signed this message, or there was a mistake entering the message.'
              );
            }
          }

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);

          setError('There was an error verifying your message! Please try again later.');
          setLoading(false);
        });
    }
  };

  return (
    <Layout title="Home">
      <div className="centeredContent">
        <h1>Saltpack Verify</h1>
      </div>

      <p>
        This page can be used to verify <a href="https://saltpack.org/">Saltpack</a> messages online, without having to install the{' '}
        <a href="https://keybase.io/">Keybase</a> client. Saltpack was created by Keybase, and is described as &quot;a modern crypto messaging
        format&quot;. Essentially this lets people easily sign or encrypt messages and share them in a browser-friendly format.
      </p>

      <p>
        I was honestly a little surprised that I was unable to find any online message verifiers for Saltpack. If Keybase is going to advocate for a
        simplistic, modern crypto message format, ease of use and accessibility for newbies should be paramount. Now with this page, users will be
        able to verify a signed message they were given, without having to create or own a Keybase account themselves.
      </p>

      <p>
        This page calls out to an AWS Lambda endpoint that contains a copy of the Keybase core executable. No authentication is required to verify
        messages using the Keybase client, so I simply verify the message and return the output. Your message is sent straight to the server,
        verified, and the output is shown and then thrown away. Both <a href="https://github.com/rickjerrity/blackholeDev">this website</a> and the{' '}
        <a href="https://github.com/rickjerrity/saltpackVerifyLambda">Lambda being called</a> are open source, but use your own discretion when
        verifying sensitive information.
      </p>

      <p>
        Your message should start with &quot;BEGIN KEYBASE SALTPACK SIGNED MESSAGE.&quot; and end with &quot;END KEYBASE SALTPACK SIGNED
        MESSAGE.&quot;. Make sure you copy the entire message, including the punctuation and excluding any trailing whitespace.
      </p>

      <form>
        <label htmlFor="message" />
        <textarea id="message" type="textarea" value={message} onChange={(e) => updateMessage(e)} rows={10} />

        <br />
        <br />

        <div className="centeredContent">
          <input id="submit" type="submit" value="Verify" onClick={(e) => verifyMessage(e)} />
        </div>
      </form>

      <br />

      <div className="centeredContent">
        {loading ? (
          <CircleLoading />
        ) : !error ? (
          <div>
            <p>{output && output.message ? `Message: ${output.message}` : ''}</p>
            <p>
              {output && output.user ? (
                <span>
                  Signed by: <a href={`https://keybase.io/${output.user}`}>{output.user}</a>
                </span>
              ) : (
                ''
              )}
            </p>
          </div>
        ) : (
          <p>{error}</p>
        )}
      </div>

      <br />
      <br />
    </Layout>
  );
}

export default SaltpackVerify;
