import React from 'react';
import { Box, Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Pagination = ({onPageChange, dataLength, currentPage, pageSize}) => {

  const siblingCount = 2
  const totalPageCount = Math.ceil(dataLength / pageSize);
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start)
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  }
  
  return (
    <Box display='flex' py='4' justifyContent='center'>
      <ButtonGroup isAttached variant='outline'>
        {currentPage > 1 && (
          <IconButton icon={<MdChevronLeft/>} onClick={onPrevious}/>
        )}
        {range(leftSiblingIndex, rightSiblingIndex).map(pageNumber => (
          <Button
            colorScheme={currentPage === pageNumber ? 'teal' : null}
            variant={currentPage === pageNumber ? 'solid' : 'outline'}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </Button>
        ))}
        {currentPage < totalPageCount && (
          <IconButton icon={<MdChevronRight/>} onClick={onNext}/>
        )}
      </ButtonGroup>
    </Box>
  );

}

export default Pagination;