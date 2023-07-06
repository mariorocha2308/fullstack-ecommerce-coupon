import React from 'react';
import { Box, Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { usePaginationStore } from '../zustand/stores/paginationCreator';

const Pagination = () => {

  const { dataLength, pageSize, currentPage, setCurrentPage} = usePaginationStore()

  const siblingCount = 2
  const totalPageCount = Math.ceil(dataLength / pageSize);
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start)
  }

  return (
    <Box display='flex' m1='1rem' mb='4rem' justifyContent='center'>
      <ButtonGroup isAttached variant='ghost'>
        <IconButton icon={<MdChevronLeft/>} onClick={() => setCurrentPage(currentPage - 1)} isDisabled={currentPage === 1}/>
        {range(leftSiblingIndex, rightSiblingIndex).map(pageNumber => (
          <Button
            key={pageNumber}
            colorScheme={currentPage === pageNumber ? 'gray' : null}
            variant={currentPage === pageNumber ? 'outline' : 'ghost'}
            onClick={() => setCurrentPage(pageNumber)}>
            {pageNumber}
          </Button>
        ))}
        <IconButton icon={<MdChevronRight/>} onClick={() => setCurrentPage(currentPage + 1)} isDisabled={currentPage === totalPageCount}/>
      </ButtonGroup>
    </Box>
  );

}

export default Pagination;