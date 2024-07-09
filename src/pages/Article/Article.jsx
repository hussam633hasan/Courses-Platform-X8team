import React from "react";
import PopularStyles from "../../components/PopularStyles/PopularStyles";
import ArticleText from "../../components/ArticleText/ArticleText";
import StylesTop from "../../components/StylesTop/StylesTop";
import HeaderArticle from "../../components/HeaderArticle/HeaderArticle";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Article() {
  const relevant = {
    title: "Which styles are no longer relevant",
    text1:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Uae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    text2:
      "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  };

    const toFollow = {
            title : "What style to follow and how to preserve your authenticity?",
            text1 : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis  occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
            text2 : "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        }

  

  return (
    <>
      <Navbar />
      <HeaderArticle />
      <PopularStyles />
      <ArticleText prop={relevant} />
      <StylesTop />
      <ArticleText prop={toFollow} />
      <Footer />

    </>
  );
}
export default Article;
