/**
 * @author: lencx
 * @create_at: Dec 13, 2020
 */

import React, { FC, useEffect, memo } from 'react';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Divider,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export interface SplitButtonProps {
  className?: string;
  options: Array<{ label: React.ReactNode; value: string }>;
  extra?: React.ReactNode;
  onChange?: (e: string) => void;
  defaultValue?: string;
}

const SplitButton: FC<SplitButtonProps> = ({
  className,
  extra,
  options,
  onChange,
  defaultValue,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    let _index = selectedIndex;
    options.some((i, idx) => {
      if (i.value === defaultValue) {
        _index = idx;
        return;
      }
    });
    setSelectedIndex(_index);
  }, [defaultValue]);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    onChange && onChange(options[index].value);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      className={className}>
      <ButtonGroup
        variant="contained"
        color="primary"
        ref={anchorRef}
        size="small"
        aria-label="split button">
        <Button
          color="primary"
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}>
            {extra}
            {options[selectedIndex]['label']}
            {/* <ArrowDropDownIcon /> */}
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 1 }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.value}
                      disabled={option.value === options[selectedIndex].value}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}>
                      {option.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default memo(SplitButton);
