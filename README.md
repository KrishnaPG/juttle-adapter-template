# **INSTRUCTIONS**

Replace all occurences of `_ADAPTER_NAME_` with the name of the adapter you
will be connecting [juttle](https://github.com/juttle/juttle) to and this
template should be a good starting point for developing your adapter.

# Juttle _ADAPTER_NAME_ Adapter

[![Build Status](https://travis-ci.org/juttle/juttle-_ADAPTER_NAME_-adapter.svg?branch=master)](https://travis-ci.org/juttle/juttle-_ADAPTER_NAME_-adapter)

## Examples

### Reading

```juttle
read _ADAPTER_NAME_ ...
```

### Writing

```juttle
... | write _ADAPTER_NAME_
```

## Installation

Like Juttle itself, the adapter is installed as a npm package. Both Juttle and
the adapter need to be installed side-by-side:

```bash
$ npm install juttle
$ npm install juttle-_ADAPTER_NAME_-adapter
```

## Configuration

The adapter needs to be registered and configured so that it can be used from
within Juttle. To do so, add the following to your `~/.juttle/config.json` file:

```json
{
    "adapters": {
        "_ADAPTER_NAME_": {
            <<XXX>>
        }
    }
}
```

## Usage

### Read options

When reading data out of _ADAPTER_NAME_ ...

Name   | Type   | Required | Description
-------|--------|----------|-------------
`from` | moment | no       | select points after this time (inclusive)
`to`   | moment | no       | select points before this time (exclusive)

### Write options

When writing data to _ADAPTER_NAME_ ...

Name   | Type   | Required | Description
-------|--------|----------|-------------
`...`  |  ...   | no       | ...


## Contributing

Want to contribute? Awesome! Don't hesitate to file an issue or open a pull
request.
