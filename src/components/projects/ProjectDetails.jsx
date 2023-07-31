import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pageContext } from "../../contexts/PageContext/PageContext";
import PageNotFound from "../pageNotFound/PageNotFound";

const ProjectDetails = () => {
  const { getOneProduct, onePost } = useContext(pageContext);

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return (
    <div>
      <PageNotFound />
    </div>
  );
};

export default ProjectDetails;
