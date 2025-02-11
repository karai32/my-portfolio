import "./PageNotFound.scss"
import { useTranslation } from "react-i18next";

const PageNotFound = () =>{
    const { t } = useTranslation();

    return(
        <section className="wrapper">
            <h1 className="title">404 ERROR</h1>
            <p className="error_html">
                <span className="doctype"><span className="green">!</span>doctype html</span><br/>
                <span className="html">html</span><br/>

                    ㅤㅤ<span className="style">style</span><br/>
                    ㅤㅤㅤㅤ<span className="class">.site &#123;</span><br/>
                    ㅤㅤㅤㅤㅤㅤ<span className="atr"><span className="blue">error</span><span className="green">:</span> <span className="purple">404</span>;</span><br/>
                    ㅤㅤㅤㅤ<span className="class">&#125;</span><br/>
                    ㅤㅤ<span className="style second">style</span><br/><br/>

                    ㅤㅤ<span className="body">body</span><br/>
                    ㅤㅤㅤㅤ<span className="body_inside">{t("error")}</span><br/>
                    ㅤㅤ<span className="body second">body</span><br/>

                <span className="html second">html</span><br/>
            </p>
        </section>
    )
}

export default PageNotFound;