import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailsFromURL } from '../../redux/details/details';
import DetailsCompany from './DetailsCompany';

const Details = () => {
  const detailsState = useSelector((state) => state.detailsReducer);
  const dispatch = useDispatch();
  const { idCompany } = useParams();

  useEffect(() => {
    dispatch(fetchDetailsFromURL(idCompany));
  }, []);

  return (
    <section className="companies-container">
      {detailsState.map((company) => (
        <DetailsCompany key={company.name} company={company} />
      ))}
    </section>
  );
};

export default Details;
