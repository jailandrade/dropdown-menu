import React, { useEffect, useState } from "react";
import Label from "../../components/Label/index.js";
import ProfileIcon from "../../icons/icon_profile.svg";
import ArrowUpIcon from "../../icons/icon_up.svg";
import ArrowDownIcon from "../../icons/icon_down.svg";
import CheckIcon from "../../icons/icon_check.svg";

function DropdownMenu({ legend, options, match }) {
  const [isOpen, setOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const [listOptions, setListOptions] = useState([]);
  const [listFiltered, setListFiltered] = useState([]);

  useEffect(() => {
    if (options.length > 0) {
      const filtered = options.sort((a, b) => a.localeCompare(b));
      setListOptions(filtered);
    }
  }, [options]);

  const doSearch = (search) => {
    const filtered = listOptions.filter((option) => option.startsWith(search));
    setListFiltered(filtered);
  };

  const selectOption = (option) => {
    if (match.length > 0 && option !== match) {
      setTimeout(() => {
        setOpen(false);
      }, [400]);
      return;
    }
    setOptionSelected(option);
    let selected = options.filter((item) => item !== option);
    selected.unshift(option);
    setListOptions(selected);
    setTimeout(() => {
      setOpen(false);
    }, [400]);
  };

  const MenuOptions = ({ option, index }) => {
    return (
      <div
        key={index}
        className="flex flex-row p-2 cursor-pointer hover:font-bold relative"
        onClick={() => selectOption(option)}
      >
        <img src={ProfileIcon} className="mr-2" alt="Icono de Usuario" />
        <Label
          label={option}
          classes={
            optionSelected === option
              ? "text-primary-400 font-bold"
              : "text-primary-400"
          }
        />
        {optionSelected === option ? (
          <img
            src={CheckIcon}
            className="absolute top-2 right-4"
            alt="Icono de Check"
          />
        ) : null}
      </div>
    );
  };

  return (
    <>
      <div className="rounded-lg border border-solid border-gray-150 relative hover:shadow-md w-full">
        <div className="py-2 px-4 flex flex-row cursor-pointer relative">
          {!optionSelected && (
            <>
              <Label
                label={legend}
                classes={
                  isOpen ? "absolute bottom-8 left-2 bg-white p-1" : "p-0"
                }
                onClick={() => setOpen(!isOpen)}
              />
            </>
          )}
          {isOpen && !optionSelected && (
            <input
              type="search"
              className="inline-block px-2 w-11/12 border border-solid border-gray-150"
              onKeyDown={(evt) => doSearch(evt.target.value)}
            />
          )}
          {optionSelected && (
            <>
              <Label
                label={optionSelected}
                onClick={() => setOpen(!isOpen)}
                classes={""}
              />
              <Label
                label={"x"}
                onClick={() => setOptionSelected("")}
                classes={"text-gray-500 cursor-pointer ml-3"}
              />
            </>
          )}
          <button
            id="menu-button"
            type="button"
            aria-expanded="true"
            aria-haspopup="true"
            className="absolute top-2 right-5"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? (
              <img src={ArrowUpIcon} alt="Icono de mostrar menu" />
            ) : (
              <img src={ArrowDownIcon} alt="Icono de colapsar menú" />
            )}
          </button>
        </div>
        {isOpen && (
          <div
            role="menu"
            aria-labelledby="menu-button"
            tabIndex="-1"
            className="absolute bg-white top-12 left-0 right-0 flex flex-col p-2 border border-solid rounded-lg border-gray-150 hover:shadow-md"
          >
            {listFiltered.length > 0
              ? listFiltered?.map((option, index) => (
                  <MenuOptions option={option} key={index} />
                ))
              : listOptions?.map((option, index) => (
                  <MenuOptions option={option} key={index} />
                ))}
          </div>
        )}
      </div>
      {match && (
        <Label
          label={`Solo podrás elegir a ${match} para continuar`}
          classes={"text-xs mt-1 text-gray-250"}
        />
      )}
    </>
  );
}

export default DropdownMenu;
