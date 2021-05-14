import Document, {Html, Head, Main, NextScript} from 'next/document';

// class component required so as to extend functionality
export default class CustomDocument extends Document{
    render(){
        return(
            <Html>
                <Head>

                </Head>
                <body>
                    <Main/>
                </body>

                <NextScript>
                   
                </NextScript>
            </Html>
        )
    }
}