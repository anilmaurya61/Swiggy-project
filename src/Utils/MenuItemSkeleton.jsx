import React from 'react';
import styled from 'styled-components';
import { Skeleton } from '@material-ui/lab';
import veg from '../../assets/veg-icon.png';

const SkeletonWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 16px;
  margin: 16px auto;
  width: 60%;
  min-height: 10rem;
  display: flex;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
  text-align: left;
  padding-right: 16px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemImageSkeleton = styled(Skeleton)`
  border-radius: 4px;
`;

const ItemNameSkeleton = styled(Skeleton)`
  width: 150px;
  height: 24px;
`;

const PriceSkeleton = styled(Skeleton)`
  width: 80px;
  height: 20px;
`;

const DescriptionSkeleton = styled(Skeleton)`
  width: 200px;
  height: 16px;
`;

const MenuItemSkeleton = () => {
  return (
    <SkeletonWrapper>
      <LeftColumn>
        <img src={veg} alt="Vegetarian" style={{ width: '20px', height: 'auto', marginTop: '8px' }} />
        <ItemNameSkeleton />
        <PriceSkeleton />
        <DescriptionSkeleton />
      </LeftColumn>
      <RightColumn>
        <ItemImageSkeleton variant="rect" width={120} height={90} />
        <Skeleton variant="text" width={60} height={36} />
      </RightColumn>
    </SkeletonWrapper>
  );
};

export default MenuItemSkeleton;
