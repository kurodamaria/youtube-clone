#!/usr/bin/bash

wc $(tree -if ../src | grep '[tj]s')
