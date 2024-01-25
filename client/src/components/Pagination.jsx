import React from 'react';
import { Box, Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Pagination = props => {

  const siblingCount = 2
  const totalPageCount = Math.ceil(props.dataLength / props.pageSize);
  const leftSiblingIndex = Math.max(props.currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(props.currentPage + siblingCount, totalPageCount)

  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start)
  }

  return (
    <Box display='flex' my='1rem' justifyContent='center'>
      <ButtonGroup isAttached variant='ghost'>
        <IconButton icon={<MdChevronLeft/>} onClick={() => props.setCurrentPage(props.target, props.currentPage - 1)} 
          isDisabled={props.currentPage === 1}/>
        {range(leftSiblingIndex, rightSiblingIndex).map(pageNumber => (
          <Button
            key={pageNumber}
            bgColor={props.currentPage === pageNumber && 'white'}
            colorScheme={props.currentPage === pageNumber && 'purple'}
            variant={props.currentPage === pageNumber ? 'outline' : 'link'}
            gap='0.5rem'
            onClick={() => props.setCurrentPage(props.target, pageNumber)}>
            {pageNumber}
          </Button>
        ))}
        <IconButton icon={<MdChevronRight/>} onClick={() => props.setCurrentPage(props.target, props.currentPage + 1)} 
          isDisabled={props.currentPage === totalPageCount}/>
      </ButtonGroup>
    </Box>
  );

}

export default Pagination;