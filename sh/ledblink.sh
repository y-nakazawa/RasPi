#!/bin/sh
echo "17" > /sys/class/gpio/export
echo "out" > /sys/class/gpio/gpio17/direction

for i in `seq 1 1 3`
do 
	echo "1" > /sys/class/gpio/gpio17/value
	sleep 1
	echo "0" > /sys/class/gpio/gpio17/value	
	sleep 1
done

echo "17" > /sys/class/gpio/unexport
exit 0
