import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody } from '@chakra-ui/react'

const PopoverView = props => {

  return ( 
    <Popover>
      <PopoverTrigger>
        {props.children}
      </PopoverTrigger>

      <PopoverContent bgSize={props.size}>
        <PopoverHeader fontWeight='bold'>{props.header}</PopoverHeader>
        {props.body && (
          <PopoverBody>{props.body()}</PopoverBody>
        )}
      </PopoverContent>
    </Popover>

  );
}

export default PopoverView;