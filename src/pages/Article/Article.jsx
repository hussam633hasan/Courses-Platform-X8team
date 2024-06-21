import React from "react";
import PopularStyles from "../../components/PopularStyles/PopularStyles";
import ArticleText from "../../components/ArticleText/ArticleText";

function Article() {

    const releventTitle = "Which styles are no longer relevant";
    const releventText1 = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Uae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";
    const releventText2 = "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";

    const followTitle = "What style to follow and how to preserve your authenticity?";
    const followText1 = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.";
    const followText2 = "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

    return (<>
        <PopularStyles />
        <ArticleText title={releventTitle} text1={releventText1} text2={releventText2} />
        <ArticleText title={followTitle} text1={followText1} text2={followText2} />
    </>
    )
}
export default Article;
